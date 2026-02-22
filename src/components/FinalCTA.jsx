"use client";

import { useForm } from "react-hook-form";

export default function FinalCTA() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Final CTA lead:", data);
    reset();
  };

  return (
    <section className="py-24 bg-primary dark:bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
          NO TE QUEDES FUERA.
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Sé el primero en enterarte cuando lancemos. Las primeras 500 personas
          recibirán un descuento especial de bienvenida.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
          <input
            className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-gray-400 backdrop-blur-sm"
            placeholder="Ingresa tu correo"
            type="email"
            {...register("email", { required: true })}
          />
          <button
            className="whitespace-nowrap bg-white text-primary font-bold py-4 px-8 rounded-md hover:bg-gray-200 transition-colors shadow-lg"
            type="submit"
          >
            NOTIFICARME
          </button>
        </form>
      </div>
    </section>
  );
}