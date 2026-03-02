import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^[0-9+]{8,15}$/.test(phone);
}

export async function POST(req) {
  try {
    const body = await req.json();

    const email = String(body?.email ?? "")
      .trim()
      .toLowerCase();

    const whatsapp = String(body?.whatsapp ?? "")
      .trim();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!whatsapp || !isValidPhone(whatsapp)) {
      return NextResponse.json({ error: "Invalid WhatsApp number" }, { status: 400 });
    }

    const { error } = await supabaseServer
      .from("early_access_signups")
      .insert([{ email, whatsapp }]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });

  } catch (e) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}