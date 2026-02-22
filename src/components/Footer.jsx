export default function Footer() {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-serif text-2xl font-bold text-primary dark:text-white mb-4">
              VAREL
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Redefiniendo la moda en El Salvador con calidad, precio y velocidad.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-primary dark:text-white mb-4">
              Compañía
            </h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a className="hover:text-primary dark:hover:text-white" href="#">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a className="hover:text-primary dark:hover:text-white" href="#">
                  Carreras
                </a>
              </li>
              <li>
                <a className="hover:text-primary dark:hover:text-white" href="#">
                  Prensa
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary dark:text-white mb-4">
              Soporte
            </h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a className="hover:text-primary dark:hover:text-white" href="#">
                  Centro de ayuda
                </a>
              </li>
              <li>
                <a className="hover:text-primary dark:hover:text-white" href="#">
                  Términos de servicio
                </a>
              </li>
              <li>
                <a className="hover:text-primary dark:hover:text-white" href="#">
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary dark:text-white mb-4">
              Síguenos
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/wearvarel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary dark:hover:text-white transition-colors duration-200"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4Zm-4.5 4a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5.25-2.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
                  />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/people/Varel/61550473701224/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary dark:hover:text-white transition-colors duration-200"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
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

        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">
            © 2026 VAREL. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <p className="text-xs text-gray-400">El Salvador, C.A.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}