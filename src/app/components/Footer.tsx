"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Información de la agencia */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-3">Party & Sun Ibiza Travel Agency</h3>
            <p className="text-sm text-orange-200">
              Donde comienza tu próxima aventura. Explora destinos únicos y crea recuerdos inolvidables con nosotros.
            </p>
          </div>

          {/* Links rápidos */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-3">Enlaces rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:underline">
                  Destinos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-3">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full bg-white text-orange-500 hover:bg-orange-200 transition"
                aria-label="Facebook"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white text-orange-500 hover:bg-orange-200 transition"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.343 3.608 1.318.975.975 1.256 2.242 1.318 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.343 2.633-1.318 3.608-.975.975-2.242 1.256-3.608 1.318-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.343-3.608-1.318-.975-.975-1.256-2.242-1.318-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.343-2.633 1.318-3.608C5.183 2.506 6.45 2.225 7.816 2.163 9.082 2.105 9.462 2.093 12 2.093zM12 0C8.741 0 8.332.014 7.053.073 5.775.132 4.535.435 3.515 1.455 2.495 2.475 2.192 3.715 2.133 4.993.573 8.47.573 15.53 2.133 19.007c.059 1.278.362 2.518 1.382 3.538 1.02 1.02 2.26 1.323 3.538 1.382 3.477 1.56 10.538 1.56 14.015 0 1.278-.059 2.518-.362 3.538-1.382 1.02-1.02 1.323-2.26 1.382-3.538 1.56-3.477 1.56-10.538 0-14.015C23.518 4.535 23.215 3.295 22.195 2.275 21.175 1.255 19.935.952 18.657.893 17.379.834 16.97.82 13.711.82c-3.26 0-3.669.014-4.948.073C8.241.14 6.94.273 5.891.917 4.841 1.561 4.418 2.541 3.898 3.222 3.378 3.902 3.018 4.59 2.838 5.17L12 24s12 0-12-24z" />
                </svg>
              </a>
              {/* Agregar más redes si es necesario */}
            </div>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="mt-8 border-t border-orange-300 pt-4 text-center text-sm text-orange-200">
          © {new Date().getFullYear()} Party & Sun Ibiza Travel Agency. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
