export default function ProblemSection() {
  const items = [
    {
      title: "Precios elevados",
      desc: "Sobreprecios por intermediarios y poca competencia.",
    },
    {
      title: "Envíos largos",
      desc: "Esperas de semanas y costos sorpresa.",
    },
    {
      title: "Selección limitada",
      desc: "Tallas y estilos que se agotan o no llegan.",
    },
    {
      title: "Ofertas falsas",
      desc: "Descuentos que no reflejan calidad real.",
    },
  ];

  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Comprar moda de calidad no debería costar de más.
            </h2>
            <p className="mt-4 text-gray-600 text-lg max-w-xl">
              VAREL nace para simplificar la experiencia: autenticidad, precio
              inteligente y disponibilidad local.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((it) => (
              <div
                key={it.title}
                className="rounded-2xl border border-black/10 p-5"
              >
                <h3 className="font-semibold text-lg">{it.title}</h3>
                <p className="mt-2 text-gray-600">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}