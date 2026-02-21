import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#f5f5f3] px-6 py-16 flex items-center">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm tracking-widest uppercase text-gray-500">
            Próximamente
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold leading-tight">
            MODA ORIGINAL. <br />
            PRECIO INTELIGENTE.
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Regístrate para enterarte primero cuando abramos al público en El
            Salvador.
          </p>

          <div className="mt-10">
            <WaitlistForm />
          </div>
        </div>

        {/* Placeholder de imagen (luego metemos foto editorial) */}
        <div className="hidden md:block">
          <div className="w-full h-[520px] rounded-3xl bg-black/10" />
        </div>
      </div>
    </section>
  );
}