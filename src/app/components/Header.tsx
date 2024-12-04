"use client"; // Marca este archivo como componente cliente

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-orange-500 to-red-600 text-white fixed top-0 left-0 right-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo con icono */}
        <Link href="/" className="flex items-center space-x-4"> 
          <img
            src="/icono.jpeg" // Ruta al icono en la carpeta public
            alt="Logo de Party & Sun Ibiza"
            className="w-20 h-20 object-cover"
          />
          <span className="text-2xl font-bold">Party & Sun Ibiza</span>
        </Link>

        {/* Menú para pantallas grandes */}
        <ul className="hidden md:flex space-x-6">
          {[ 
            { href: "/", label: "Inicio" },
            { href: "/destinations", label: "Destinos" },
            { href: "/servicios", label: "Servicios" },
            { href: "/contact", label: "Contacto" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-white hover:text-orange-300 transition-colors duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botón de menú móvil */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Menú desplegable para móviles */}
        {isMenuOpen && (
          <ul className="absolute top-full left-0 w-full bg-gradient-to-r from-orange-500 to-red-600 shadow-lg md:hidden flex flex-col space-y-4 py-4 px-6">
            {[ 
              { href: "/", label: "Inicio" },
              { href: "/destinations", label: "Destinos" },
              { href: "/servicios", label: "Servicios" },
              { href: "/contact", label: "Contacto" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-white hover:text-orange-300 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
