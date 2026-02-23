"use client";

import { useLocale } from "@/components/LocaleProvider";

export default function ProblemSection() {
  const { t } = useLocale();

  const heading =
    t?.problem?.heading ?? "Buying quality fashion shouldn’t cost more.";

  const cards = Array.isArray(t?.problem?.cards) ? t.problem.cards : [];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Title */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
            {heading}
          </h2>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            {t?.problem?.sub ??
              "We remove the friction: fair pricing, faster delivery, and verified sourcing."}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  {c.icon ?? "verified"}
                </span>
              </div>

              <h3 className="mt-5 font-bold text-primary text-lg">
                {c.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}