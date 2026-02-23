"use client";

import { useForm } from "react-hook-form";
import { useLocale } from "@/components/LocaleProvider";

export default function FinalCTA() {
  const { t } = useLocale();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: { email: "", whatsapp: "" },
  });

  const onSubmit = async (data) => {
    console.log("Final CTA lead:", data);
    reset();
  };

  return (
    <section id="join" className="py-24 border-t border-gray-100 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left copy */}
          <div className="lg:col-span-6">
            <p className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase">
              {t?.final?.eyebrow ?? "EARLY ACCESS"}
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-primary leading-tight">
              {t?.final?.title ?? "DON’T MISS OUT"}
            </h2>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-xl">
              {t?.final?.desc ??
                "Launch inventory will be limited. Join the list to get notified first."}
            </p>
          </div>

          {/* Right form card */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-gray-100 rounded-2xl shadow-xl p-8 sm:p-10">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-4"
              >
                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    {t?.final?.emailLabel ?? "Email"}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <input
                      type="email"
                      autoComplete="email"
                      placeholder={t?.final?.emailExample ?? "name@email.com"}
                      className="w-full pl-10 pr-4 py-4 rounded-xl border border-gray-200 bg-white text-primary placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-300"
                      {...register("email", { required: true })}
                    />
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-semibold text-primary">
                      {t?.final?.whatsappLabel ?? "WhatsApp"}
                    </label>
                    <span className="text-xs text-gray-400">
                      {t?.final?.whatsappHint ?? "(Optional)"}
                    </span>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <input
                      type="tel"
                      inputMode="tel"
                      placeholder={t?.final?.whatsappExample ?? "+1 (555) 000-0000"}
                      className="w-full pl-10 pr-4 py-4 rounded-xl border border-gray-200 bg-white text-primary placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-300"
                      {...register("whatsapp")}
                    />
                  </div>
                </div>

                {/* CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full rounded-xl bg-primary text-white font-extrabold tracking-wider py-4 hover:bg-black transition-colors shadow-lg active:scale-[0.99] disabled:opacity-60"
                >
                  {isSubmitting ? "..." : t?.final?.cta ?? "JOIN NOW"}
                </button>

                <p className="text-xs text-gray-500 mt-2">
                  {t?.final?.disclaimer ?? "No spam. Unsubscribe anytime."}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}