"use client";

import WaitlistForm from "./WaitlistForm";

export default function FinalCTA() {
  return (
    <section className="bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            NO TE QUEDES FUERA.
          </h2>

          <p className="mt-4 text-white/80 text-lg max-w-xl">
            Regístrate para recibir la notificación oficial cuando abramos al público.
          </p>
        </div>

        <div className="md:justify-self-end w-full">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}