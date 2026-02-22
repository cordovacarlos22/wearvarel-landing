export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="hidden sm:flex gap-4 w-1/3">
            <a
              className="text-primary/60 hover:text-primary dark:text-white/60 dark:hover:text-white transition-colors"
              href="/"
            >
              <span className="material-symbols-outlined text-[20px]">
                public
              </span>
            </a>
          </div>

          <div className="flex-1 flex justify-center w-1/3">
            <h1 className="font-serif text-3xl font-bold tracking-widest text-primary dark:text-white">
              VAREL
            </h1>
          </div>

          <div className="flex justify-end items-center gap-3 w-1/3">
            <a
              href="https://www.instagram.com/wearvarel/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-200"
            >
              <span className="sr-only">Instagram</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
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
          </div>
        </div>
      </div>
    </nav>
  );
}