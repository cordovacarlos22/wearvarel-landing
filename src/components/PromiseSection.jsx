"use client";

import { useLocale } from "@/components/LocaleProvider";

export default function PromiseSection() {
  const { t } = useLocale();

  const features = t?.promise?.features ?? [];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-extrabold tracking-[0.25em] text-gray-500">
            {t?.promise?.eyebrow ?? "OUR PROMISE"}
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
            {t?.promise?.title ?? "VAREL brings authentic fashion at smart prices"}
          </h2>

          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            {t?.promise?.desc ?? "We combine efficient logistics with curated sourcing."}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div
              key={`${f.title}-${idx}`}
              className="rounded-2xl bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-8"
            >
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px] text-primary">
                  {f.icon}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-extrabold text-primary">
                {f.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}