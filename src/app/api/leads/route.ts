import { NextRequest, NextResponse } from "next/server";
import { writeFile, readFile } from "fs/promises";
import { join } from "path";

const LEADS_FILE = join(process.cwd(), "data", "leads.json");

interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  source: string;
  page: string;
  timestamp: string;
  status: "new" | "contacted" | "converted";
}

async function ensureDataDir() {
  const { mkdir } = await import("fs/promises");
  const dataDir = join(process.cwd(), "data");
  try {
    await mkdir(dataDir, { recursive: true });
  } catch {
    // directory exists
  }
}

async function getLeads(): Promise<Lead[]> {
  try {
    const data = await readFile(LEADS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function POST(request: NextRequest) {
  try {
    await ensureDataDir();
    const body = await request.json();
    const { name, email, phone, company, subject, message, source, page } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Name, email, subject, and message are required" },
        { status: 400 }
      );
    }

    const leads = await getLeads();
    const newLead: Lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      name,
      email,
      phone: phone || undefined,
      company: company || undefined,
      subject,
      message,
      source: source || "contact-form",
      page: page || "/contact",
      timestamp: new Date().toISOString(),
      status: "new",
    };

    leads.push(newLead);
    await writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));

    return NextResponse.json({
      success: true,
      message: "Lead captured successfully",
      leadId: newLead.id,
    });
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json(
      { error: "Failed to save lead" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await ensureDataDir();
    const leads = await getLeads();
    return NextResponse.json({ leads, total: leads.length });
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json(
      { error: "Failed to fetch leads" },
      { status: 500 }
    );
  }
}
