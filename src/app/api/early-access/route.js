import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidWhatsapp(whatsapp) {
  if (!whatsapp) return true;
  return /^[0-9+]{8,15}$/.test(whatsapp);
}

export async function POST(req) {
  try {
    const body = await req.json();

    const email = String(body?.email ?? "").trim().toLowerCase();
    const whatsapp = String(body?.whatsapp ?? "").trim();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (!isValidWhatsapp(whatsapp)) {
      return NextResponse.json({ error: "Invalid WhatsApp number" }, { status: 400 });
    }

    const payload = { email, whatsapp: whatsapp || null };

    const { data, error } = await supabaseServer
      .from("early_access_signups")
      .upsert(payload, { onConflict: "email" })
      .select("email");

    if (error) {
      console.error("SUPABASE UPSERT ERROR:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });

      return NextResponse.json(
        {
          error: "Supabase error",
          message: error.message,
          code: error.code,
          hint: error.hint,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, saved: data?.[0]?.email }, { status: 200 });
  } catch (e) {
    console.error("API ERROR:", e);
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}