"use client";

import { useForm } from "react-hook-form";
import { useLocale } from "@/components/LocaleProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { sileo } from "sileo";
const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuByjDmIPoni_jEkFgpnMdlhEf-aFc4uM1xpKZ2VHw8K5VJjGT3R_nNErzk7Wq5GinCUOzjIRlYsvsby9NmTfYkwIqzzrhPqanNCvdh5wFMWz6dqFhXJtwF2wEB88rb36_3n0cTasZTLn-KUeiK2vwJJYFRAxi_GGUUL82maj_IoSBK_o_EV7CdQiVT9a-cTHcjX6Kq6ixeSNLSRmEPO0IMuwsR0uKqrH7Z5IaLZNGvc-3v8bJGbqFvFB55K35ex3t6kMuWXW-jqAU8";

export default function HeroSection() {
  const { t } = useLocale();

  const pill =
    t?.nav?.comingSoon ??
    t?.hero?.pill ??
    "COMING SOON";

  const titleTop =
    t?.hero?.titleTop ??
    t?.hero?.titleLine1 ??
    "ORIGINAL FASHION.";

  const titleBottom =
    t?.hero?.titleBottom ??
    t?.hero?.titleLine2 ??
    "SMART PRICING.";

  const description =
    t?.hero?.description ??
    t?.hero?.subtitle ??
    "We’re launching soon. Join the waitlist to get early access and updates.";

  const note =
    t?.hero?.waitlistNote ??
    t?.hero?.micro ??
    "Join 2,000+ people on the waitlist.";

  return (
    <section
      id="join"
      className="w-full bg-white"
    >
      <div className="max-w-[1280px] mx-auto px-6 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* LEFT: Card */}
          <div className="lg:col-span-6 flex items-center">
            <div className="w-full bg-white border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.10)] rounded-3xl p-7 sm:p-10">
              {/* Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-xs font-extrabold tracking-[0.25em] text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  bolt
                </span>
                <span>{pill}</span>
              </div>

              {/* Headline */}
              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.02] text-primary">
                {titleTop}
                <br />
                <span className="text-primary/60">{titleBottom}</span>
              </h1>

              {/* Description */}
              <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                {description}
              </p>

              {/* Form */}
              <div className="mt-8">
                <WaitlistForm />
                <p className="mt-4 text-xs text-gray-500">{note}</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="lg:col-span-6 relative overflow-hidden rounded-3xl border border-gray-100 bg-gray-100">
            {/* Mobile height + Desktop full height */}
            <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] w-full">
              <img
                src={HERO_IMAGE}
                alt="VAREL fashion"
                className="absolute inset-0 w-full h-full object-cover object-[50%_20%] lg:object-center"
                loading="eager"
              />

              {/* Soft overlay like Stitch */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-white/10 to-white/0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function WaitlistForm() {
  const { t } = useLocale();
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");

  const emailPlaceholder = t?.hero?.emailPlaceholder ?? "Email address";
  const whatsappPlaceholder = t?.hero?.whatsappPlaceholder ?? "WhatsApp (Optional)";
  const cta = t?.hero?.cta ?? "I WANT EARLY ACCESS";

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: { email: "", whatsapp: "" },
  });

  const onSubmit = async (data) => {
    const email = (data.email || "").trim();
    const whatsapp = (data.whatsapp || "").trim();

    const request = fetch("/api/early-access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, whatsapp }),
    }).then(async (res) => {
      if (!res.ok) {
        const payload = await res.json().catch(() => ({}));
        throw new Error(payload?.message || payload?.error || "Failed");
      }
      return res.json();
    });

    sileo.promise(request, {
      loading: {
        title: t?.toast?.loading ?? "Securing your access…",
      },
      success: {
        title: t?.toast?.successTitle ?? "Welcome to VAREL.",
        description:
          t?.toast?.successDesc ??
          "Authentic brands. Smart pricing. Always.",
      },
      error: {
        title: t?.toast?.errorTitle ?? "Something went wrong",
        description:
          t?.toast?.errorDesc ??
          "Please try again.",
      },
    });

    try {
      await request;
      reset();

      setTimeout(() => {
        router.push("/thanks-for-signing-up");
      }, 1000);
    } catch { }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 sm:grid-cols-5 gap-3"
    >
      {/* Email */}
      <div className="sm:col-span-3 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          <span className="material-symbols-outlined">mail</span>
        </div>
        <input
          type="email"
          autoComplete="email"
          placeholder={emailPlaceholder}
          className="w-full pl-10 pr-4 py-4 rounded-2xl border border-gray-200 bg-white text-primary placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-300"
          {...register("email", { required: true })}
        />
      </div>

      {/* WhatsApp */}
      <div className="sm:col-span-2 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          <span className="material-symbols-outlined">call</span>
        </div>
        <input
          type="tel"
          inputMode="tel"
          placeholder={whatsappPlaceholder}
          className="w-full pl-10 pr-4 py-4 rounded-2xl border border-gray-200 bg-white text-primary placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-300"
          {...register("whatsapp")}
        />
      </div>

      {/* CTA */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="sm:col-span-5 mt-1 w-full rounded-2xl bg-primary text-white font-extrabold tracking-wider py-4 hover:bg-black transition-colors shadow-lg active:scale-[0.99] disabled:opacity-60"
      >
        {isSubmitting ? "..." : cta}
      </button>

      {errorMsg ? (
        <p className="sm:col-span-5 text-xs text-red-600 mt-1">{errorMsg}</p>
      ) : null}
    </form>
  );
}

