"use client";

import { useLocale } from "@/components/LocaleProvider";
import Link from "next/link";
import Image from "next/image";
const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCuKpW0kNGKl5KulPYUJwZ5_C-1ayz3HqK8MemU_P6PTyDqvVmWat34yr3iACry29NCCaMs3sf53AZfEdkHqu4S5vSQ4VR6vAmTdxxPkgVQTGBjM66TkZbUO-Hw8hTvaC30ifmXdOnfw0spxJDWMLmJrq5NaU-WgYw0p-wmkmv9IkQCUsvUhL5s8tibn8TE7n1ngd3VSsueQpSLbPqRGtQgkKhiC5MQmsrA0wqtqNxDVvtqLULhoVx_w6uXCJsjfywplYk0Y2KqOqs";

export default function ThanksPage() {
  const { t } = useLocale();

  const titleLine1 = t?.thanks?.titleLine1 ?? "GRACIAS POR";
  const titleLine2 = t?.thanks?.titleLine2 ?? "REGISTRARTE.";
  const desc =
    t?.thanks?.desc ??
    "Te hemos añadido a nuestra lista exclusiva. Serás el primero en recibir una notificación cuando abramos nuestras puertas.";
  const back = t?.thanks?.back ?? "VOLVER AL INICIO";
  const follow = t?.thanks?.follow ?? "Sigue nuestra historia";

  const igUrl = t?.footer?.instagramUrl ?? "https://www.instagram.com/varel.official/";
  const igLabel = t?.footer?.instagramLabel ?? "Instagram";
  const rights = t?.footer?.rights ?? "© 2026 VAREL. All rights reserved.";

  return (
    <div className="flex w-full min-h-screen bg-[#f9f9f7] text-[#151414]">
      {/* LEFT PANEL */}
      <div className="flex-1 flex flex-col lg:w-[45%] lg:max-w-[640px] border-r border-[#e5e4e2] bg-[#f9f9f7]">
        {/* Header */}
        <header className="flex items-center px-6 py-6 lg:px-12 lg:py-8">
          <div className="flex items-center gap-2 cursor-pointer">
            <a href="/" className="flex items-center">
                        <Image
                          src="/logo-horizontal.png"
                          alt="VAREL"
                          width={160}
                          height={44}
                          priority
                          className="h-full w-auto"
                        />
                      </a>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col justify-center flex-1 px-6 lg:px-16 py-8">
          <div className="max-w-md w-full flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight">
                {titleLine1} <br />
                <span className="italic font-light text-primary">{titleLine2}</span>
              </h1>

              <div className="w-12 h-[1px] bg-primary/40 my-2"></div>

              <p className="text-[#787573] text-lg leading-relaxed max-w-[90%]">
                {desc}
              </p>
            </div>

            <div className="pt-6">
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-[#151414] px-8 text-sm font-medium tracking-widest text-white transition-all hover:bg-primary"
              >
                {back}
              </Link>
            </div>

            <div className="mt-16 pt-8 border-t border-[#e5e4e2]">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold tracking-[0.15em] text-[#787573] uppercase">
                  {follow}
                </span>

                {/* Instagram */}
                <a
                  href={igUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 rounded-full border border-gray-200 flex  flex-row items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                  aria-label={igLabel}
                  title={igLabel}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="transition-colors duration-300 group-hover:text-white"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

              </div>
            </div>
          </div>
        </main>

        <footer className="px-6 py-6 lg:px-12 text-xs text-[#787573] tracking-wider">
          {rights}
        </footer>
      </div>

      {/* RIGHT PANEL IMAGE */}
      <div className="hidden lg:block lg:flex-1 relative overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="VAREL fabric texture"
          className="w-full h-full object-cover opacity-90 transition-transform duration-[2000ms] ease-out hover:scale-105"
        />

        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40 pointer-events-none"></div>

        <div className="absolute bottom-12 right-12 text-white/80 text-right hidden xl:block">
          <p className="text-xs uppercase tracking-[0.3em] mb-2">
            {t?.thanks?.imageEyebrow ?? "COLECCIÓN 01"}
          </p>
          <p className="text-4xl italic font-light">
            {t?.thanks?.imageTitle ?? "Próximamente"}
          </p>
        </div>
      </div>
    </div>
  );
}