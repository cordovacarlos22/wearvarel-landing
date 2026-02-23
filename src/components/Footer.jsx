"use client";

import { useLocale } from "@/components/LocaleProvider";
import Image from "next/image";
export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-gray-100 bg-white py-14">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <a href="#top" className="flex items-center">
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

            <p className="mt-4 text-sm text-gray-500 max-w-md">
              {t?.footer?.tagline ??
                "Smart fashion. Quality, style, fair pricing."}
            </p>
          </div>

          {/* Follow */}
          <div className="md:col-span-3 md:col-start-10">
            <h4 className="text-sm font-bold tracking-widest text-primary">
              {t?.footer?.follow ?? "Follow"}
            </h4>

            <div className="mt-4 flex items-center gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/wearvarel/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/Varel/61550473701224/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg
                  aria-hidden="true"
                  className="h-[18px] w-[18px]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="text-xs text-gray-400">
            {t?.footer?.rights ?? "© 2026 VAREL. All rights reserved."}
          </p>

          <p className="text-xs text-gray-400">wearvarel.com</p>
        </div>
      </div>
    </footer>
  );
}