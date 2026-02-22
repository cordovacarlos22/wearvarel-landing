export default function ProblemSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-background-light dark:bg-background-dark">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        <div className="lg:col-span-4 lg:sticky lg:top-32">
          <h3 className="text-sm font-bold tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-4 uppercase">
            El Problema
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-white leading-tight mb-6">
            La moda en
            <br />
            El Salvador está rota.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Tres grandes obstáculos separan a los amantes de la moda de las marcas
            que desean. VAREL existe para eliminar estas barreras.
          </p>
          <div className="h-1 w-20 bg-primary dark:bg-white mt-8" />
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="group p-8 border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors bg-white dark:bg-neutral-900 rounded-lg">
            <span className="block text-6xl font-black text-gray-200 dark:text-gray-800 mb-6 group-hover:text-primary dark:group-hover:text-white transition-colors duration-500">
              01
            </span>
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-primary dark:text-white">
                attach_money
              </span>
              <h3 className="text-xl font-bold text-primary dark:text-white">
                Precios Elevados
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Las marcas internacionales llegan con sobreprecios injustificables,
              a veces hasta el doble de su valor original.
            </p>
          </div>

          <div className="group p-8 border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors bg-white dark:bg-neutral-900 rounded-lg md:mt-12">
            <span className="block text-6xl font-black text-gray-200 dark:text-gray-800 mb-6 group-hover:text-primary dark:group-hover:text-white transition-colors duration-500">
              02
            </span>
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-primary dark:text-white">
                schedule
              </span>
              <h3 className="text-xl font-bold text-primary dark:text-white">
                Envíos Largos
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Semanas de espera e incertidumbre en aduanas para recibir tus prendas
              favoritas compradas en línea.
            </p>
          </div>

          <div className="group p-8 border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors bg-white dark:bg-neutral-900 rounded-lg">
            <span className="block text-6xl font-black text-gray-200 dark:text-gray-800 mb-6 group-hover:text-primary dark:group-hover:text-white transition-colors duration-500">
              03
            </span>
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-primary dark:text-white">
                checkroom
              </span>
              <h3 className="text-xl font-bold text-primary dark:text-white">
                Selección Limitada
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Las colecciones llegan tarde, incompletas o son saldos de temporadas
              pasadas que ya no son tendencia.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg md:mt-12 h-64 md:h-auto group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAFuTKvSd2g6fuJLKv4ABObamO4CiHw5A-REm_gBWWbHVEmsSl-hfvgqPNdVIUr1c_DgGI1kMf2f85JScIRrH3Ta_sRnyEbHZozVpMsu2cInnc2j_GUFpyis195DTDRdU09hYWOauZ70e2_CpCze6WeE8lTEb9WWoU_fVYUQMBQuPQ6lvDSB4gYuybJQLXFmGIcDi6S7opLzIY0ZDRP_yw8yBJBM9_uTqb73zqGIYboZMnUyeqq1zncFnTukWUoBBDKtUIkcgSvJEY')",
              }}
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </div>
    </section>
  );
}