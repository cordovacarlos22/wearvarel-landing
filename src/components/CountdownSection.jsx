"use client";

import { useEffect, useMemo, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";

/**
 * Countdown real a una fecha fija.
 * Cambia LAUNCH_DATE_ISO cuando ya tengas fecha real.
 * Formato ISO recomendado: "2026-04-15T18:00:00-06:00"
 */
const LAUNCH_DATE_ISO = "2026-04-15T18:00:00-06:00"; // provisional

function getTimeLeft(targetMs) {
  const now = Date.now();
  const diff = Math.max(0, targetMs - now);

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return { diff, days, hours, minutes, seconds };
}

function pad2(n) {
  return String(n).padStart(2, "0");
}

export default function CountdownSection() {
  const { t } = useLocale();

  const targetMs = useMemo(() => new Date(LAUNCH_DATE_ISO).getTime(), []);
  const [time, setTime] = useState(() => getTimeLeft(targetMs));

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTimeLeft(targetMs));
    }, 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  const labels = t?.countdown?.labels ?? ["Days", "Hours", "Minutes", "Seconds"];
  const eyebrow = t?.countdown?.eyebrow ?? "LAUNCH IS NEAR";

  const isEnded = time.diff <= 0;

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center">
          <div className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase">
            {eyebrow}
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
            {isEnded ? (t?.countdown?.ended ?? "Launching soon.") : (t?.countdown?.title ?? "Get ready.")}
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {t?.countdown?.desc ??
              "We’re preparing the first drop. Join the waitlist to be notified first."}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <TimeCard value={pad2(time.days)} label={labels[0]} />
          <TimeCard value={pad2(time.hours)} label={labels[1]} />
          <TimeCard value={pad2(time.minutes)} label={labels[2]} />
          <TimeCard value={pad2(time.seconds)} label={labels[3]} />
        </div>

        <div className="mt-10 text-center text-xs text-gray-400">
          {t?.countdown?.note ??
            `Target launch date is provisional. We’ll update you.`}
        </div>
      </div>
    </section>
  );
}

function TimeCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white shadow-sm px-4 py-6 text-center">
      <div className="text-4xl sm:text-5xl font-black text-primary tracking-tight">
        {value}
      </div>
      <div className="mt-2 text-xs font-bold tracking-[0.25em] uppercase text-gray-400">
        {label}
      </div>
    </div>
  );
}