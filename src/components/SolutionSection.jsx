export default function SolutionSection() {
  return (
    <section className="py-24 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-4 uppercase">
            La Solución VAREL
          </h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary dark:text-white">
            Lo mejor del mundo, directo a tu puerta.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SolutionCard
            icon="verified"
            title="Marcas Auténticas"
            desc="Garantía de originalidad en cada prenda. Trabajamos directamente con distribuidores oficiales."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCro1ZyCPCMmpFBKtou-6NVy215TKrMZWTK7bnTVo4R686XvCEHyScG-CWQN8OOimtqW1JRvFp_FAFceZrmECLFbcmdmaHQT12pn9zTsBVZ6l1jShbVpEWUXaMAWO7z8wmELQARAuRnAqxssGs8_b91NjGxhrbFIbIbWXBIO9tCKkY_i_DjohMfI0YpYFOmSmlvxqpu7QMTbvOpZlTEim3kkmwaOmu8bIyUs7NFlsH3Xwog9HU6BUsioGxe85gK3qZ-4oWZjUQ7t8o"
          />

          <SolutionCard
            icon="trending_down"
            title="Precios Competitivos"
            desc="Modelo de negocio eficiente que nos permite ofrecer hasta un 60% menos que el retail tradicional."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuD5ZLH23mkgGhNRcwrxf8CrBlRIddPxewJCh3uOjt-TIX3u6_x2RJiSLRMrzMGh0-FG4TwW9JIosHYestXo2KyLrt6MhEd82Ox_-GTOa2FEGl7ZAG54hwrFRlfcm62JexhKZktBDp7kquXwP69OF_PTzi83oznVnlhWJOpRngfw3ywzPaFhjJln26LHdMCg1ZaXDeuS0kk0520ZnGbc_mch4_cPKrIAvVwsAWHcUnGb1m4KsITbcf856sxKKMUwwTU3Oqf2bwWZDTk"
          />

          <SolutionCard
            icon="local_shipping"
            title="Envíos Rápidos"
            desc="Sin esperas de semanas. Entrega local en 24-48 horas en todo el territorio nacional."
            bgPos="bottom"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuC9s1gU_PONR6YtOSN7ztO3yB8_5ZhnHLg49cr76dHnxwhcMubuu2r7fmTRBAlPEPqdD453Tbbt7Pky__ZozVM7ljBJVHB2Mu2jVRulHxkatzf_IFWaN5VUD4n59EPRqDVr2JoLsYBGV1kdJ46C1sPdmlfdUoQQ_0afPDivvYxZPz_w_VFqoeK2Oyav79epH_BLSvY_Dmg_JibkRvQUjv4fzpp_yIs9b4D50pjm2oVeAgZaJkpPMZm87_ksuChMQrpkgOahQCRa9tM"
          />
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ icon, title, desc, image, bgPos = "center" }) {
  return (
    <div className="bg-beige-light dark:bg-beige-dark rounded-md overflow-hidden group">
      <div className="h-64 overflow-hidden relative">
        <div
          className="absolute inset-0 bg-cover transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url('${image}')`, backgroundPosition: bgPos }}
        />
        <div className="absolute top-4 left-4 bg-white dark:bg-primary w-9 h-9 flex items-center justify-center rounded-full">
          <span className="material-symbols-outlined text-sm">{icon}</span>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}