export default function Benefits() {
  const cards = [
    {
      title: "Marcas auténticas",
      desc: "Selección curada y enfoque en autenticidad.",
    },
    {
      title: "Precio inteligente",
      desc: "Mejor valor sin inflar precios innecesariamente.",
    },
    {
      title: "Envío local",
      desc: "Pensado para El Salvador: más rápido, más simple.",
    },
  ];

  return (
    <section className="bg-[#f5f5f3] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Lo mejor del mundo, directo a tu puerta.
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-2xl border border-black/10 p-6"
            >
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}