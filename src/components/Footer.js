export default function Footer() {
  return (
    <footer className="bg-white px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div>
          <p className="text-lg font-semibold tracking-wide">VAREL</p>
          <p className="mt-2 text-sm text-gray-600">
            Moda inteligente para El Salvador.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-gray-600">
          <a className="hover:text-black" href="#">
            Privacidad
          </a>
          <a className="hover:text-black" href="#">
            Términos
          </a>
          <a className="hover:text-black" href="#">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}