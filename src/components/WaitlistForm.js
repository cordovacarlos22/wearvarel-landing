"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function WaitlistForm() {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    console.log("Lead:", data);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      reset();
    }, 800);
  };

  return (
    <div className="w-full max-w-md bg-white/90 backdrop-blur p-6 rounded-2xl shadow-sm border border-black/5">
      {!success ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="tucorreo@email.com"
              {...register("email", { required: true })}
              className="w-full border border-black/10 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">
              WhatsApp (opcional)
            </label>
            <input
              type="text"
              placeholder="+503 ____ ____"
              {...register("whatsapp")}
              className="w-full border border-black/10 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded-lg hover:bg-zinc-800 transition"
            disabled={loading}
          >
            {loading ? "Enviando..." : "UNIRME A LA LISTA"}
          </button>

          <p className="text-xs text-gray-500 text-center">
            Sin spam. Solo aviso de lanzamiento.
          </p>
        </form>
      ) : (
        <div className="text-center space-y-2 py-2">
          <h3 className="text-xl font-semibold">Listo 🙌</h3>
          <p className="text-gray-600">
            Te avisaremos cuando abramos al público.
          </p>
        </div>
      )}
    </div>
  );
}