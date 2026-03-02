import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";
import { Resend } from "resend";

function isValidEmail(email) {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const email = (body?.email || "").trim().toLowerCase();
    const whatsapp = (body?.whatsapp || "").trim();
    const locale = body?.locale === "es" ? "es" : "en";

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    // 1) Save in Supabase
    const supabase = supabaseServer();

    const { error: dbError } = await supabase.from("waitlist").upsert(
      {
        email,
        whatsapp: whatsapp || null,
        locale,
      },
      { onConflict: "email" }
    );

    if (dbError) {
      return NextResponse.json(
        { ok: false, error: dbError.message },
        { status: 500 }
      );
    }

    // 2) Send email with Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      const from = process.env.RESEND_FROM || "VAREL <onboarding@resend.dev>";

      const subject =
        locale === "es"
          ? "¡Estás en la lista de VAREL! ✅"
          : "You’re on the VAREL waitlist! ✅";

      const preheader =
        locale === "es"
          ? "Gracias por registrarte. Te avisaremos primero."
          : "Thanks for joining. You’ll be the first to know.";

      const html =
        locale === "es"
          ? `
            <div style="font-family:ui-sans-serif,system-ui;line-height:1.5">
              <h2 style="margin:0 0 8px">¡Listo! ✅</h2>
              <p style="margin:0 0 12px">${preheader}</p>
              <p style="margin:0 0 12px"><b>Email:</b> ${email}</p>
              <p style="margin:0;color:#6b7280;font-size:12px">
                Si no fuiste tú, ignora este correo.
              </p>
            </div>
          `
          : `
            <div style="font-family:ui-sans-serif,system-ui;line-height:1.5">
              <h2 style="margin:0 0 8px">You’re in! ✅</h2>
              <p style="margin:0 0 12px">${preheader}</p>
              <p style="margin:0 0 12px"><b>Email:</b> ${email}</p>
              <p style="margin:0;color:#6b7280;font-size:12px">
                If this wasn’t you, ignore this email.
              </p>
            </div>
          `;

      await resend.emails.send({
        from,
        to: email,
        subject,
        html,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Unknown error" },
      { status: 500 }
    );
  }
}