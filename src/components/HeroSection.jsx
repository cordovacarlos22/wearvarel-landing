"use client";

import { useForm } from "react-hook-form";

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDrV5lQZ6n5Nd6P7nGDI_EarBkxv9tWlpaE8ikzfYe7k_wkYXC9XpWZgjBZZDOPEIUT7G-PD9dUUrlc57f-EIz-qSJ7tM1se7CtQ9qUvGHxq5JOqWxlZpm5GBB56VXzTSmRf-mteopuo4TsEiaEoj5_A5zT-k0mTfsVBKlwO4bw9Qv5aO8Zx3St5247Jz-cfp0iJ1x0uHvyqjRwAsispxeFxHP7mRCbrgrcPRVJ-Nde0W8VmZ0j83EOFtyIPYSYf3yf2j129o5CYQ4')",
            filter: "grayscale(20%) contrast(90%)",
          }}
        />
        <div className="absolute inset-0 bg-white/20 dark:bg-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6 text-center">
        <div className="bg-white/80 dark:bg-primary/80 backdrop-blur-xl p-8 md:p-12 lg:p-16 rounded-lg shadow-2xl border border-white/20 dark:border-white/10 mx-auto max-w-3xl">
          <h2 className="text-primary dark:text-white text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-4">
            MODA ORIGINAL.
            <br />
            <span className="text-primary/70 dark:text-gray-300 font-bold">
              PRECIO INTELIGENTE.
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl font-medium mb-10 max-w-xl mx-auto leading-relaxed">
            La espera casi termina. Regístrate ahora para obtener acceso anticipado
            exclusivo.
          </p>

          <HeroWaitlistForm />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
            Únete a más de 2,000 personas en la lista de espera.
          </p>
        </div>
      </div>
    </section>
  );
}

function HeroWaitlistForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Lead:", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto w-full"
    >
      <div className="relative flex-grow">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          <span className="material-symbols-outlined">mail</span>
        </div>

        <input
          className="w-full pl-10 pr-4 py-4 bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-white focus:border-transparent text-primary dark:text-white placeholder-gray-400 text-base shadow-sm"
          placeholder="Tu correo electrónico"
          type="email"
          {...register("email", { required: true })}
        />
      </div>

      <button
        className="whitespace-nowrap bg-primary dark:bg-white text-white dark:text-primary font-bold py-4 px-8 rounded-md hover:bg-black dark:hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
        type="submit"
      >
        UNIRME A LA LISTA
      </button>
    </form>
  );
}