'use client';

import { Mail,Phone} from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return(

 <header className="bg-white/80 shadow-md sticky backdrop-blur-md top-0 z-50 w-full py-0">
        <div className="flex items-center justify-between px-4 py-0 md:px-8">
          {/* Primera navegación */}
          <nav className="hidden md:flex flex-wrap gap-10 items-center text-xl font-medium text-gray-700 py-0 px-3">
            <Link href="/" className="relative text-gray-700 hover:text-lime-800 transition duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-lime-800 after:transition-all after:duration-300 hover:after:w-full">INICIO</Link>
            <Link href="/nosotros" className="relative text-gray-700 hover:text-lime-800 transition duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-lime-800 after:transition-all after:duration-300 hover:after:w-full">QUIÉNES SOMOS</Link>
            <Link href="/localizacion" className="relative text-gray-700 hover:text-lime-800 transition duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-lime-800 after:transition-all after:duration-300 hover:after:w-full">LOCALIZACIÓN</Link>
          </nav>

          {/* Logo */}
          <a href="/" className="h-30 py-0 md:h-40">
            <img src="/logo.png" alt="Logo Asesoría Llamas" className="h-full w-auto object-contain px-4" />
          </a>

          {/* Segunda navegación */}
          <nav className="hidden md:flex flex-wrap gap-10 items-center text-xl font-medium text-gray-700 px-3 py-0">
            <Link href="/servicios" className="relative text-gray-700 hover:text-lime-800 transition duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-lime-800 after:transition-all after:duration-300 hover:after:w-full">SERVICIOS</Link>
            <Link href="/horario" className="relative text-gray-700 hover:text-lime-800 transition duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-lime-800 after:transition-all after:duration-300 hover:after:w-full">HORARIO</Link>
            <Link href="/citas" className="bg-lime-800 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
              Pedir cita
            </Link>
          </nav>
            </div>
          {/* Botón hamburguesa solo en móviles */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="relative w-8 h-6 flex flex-col justify-between items-center md:hidden group py-1"
  aria-label="Menú móvil"
>
  {/* Línea 1 */}
  <span
    className={`block h-0.5 w-full bg-lime-800 rounded-sm transition-transform duration-300 ease-in-out ${
      menuOpen ? 'rotate-45 translate-y-2' : ''
    }`}
  />
  {/* Línea 2 */}
  <span
    className={`block h-0.5 w-full bg-lime-800 rounded-sm transition-opacity duration-300 ease-in-out ${
      menuOpen ? 'opacity-0' : ''
    }`}
  />
  {/* Línea 3 */}
  <span
    className={`block h-0.5 w-full bg-lime-800 rounded-sm transition-transform duration-300 ease-in-out ${
      menuOpen ? '-rotate-45 -translate-y-2' : ''
    }`}
  />
</button>

{/* Menú desplegable en móvil */}
<div
  className={`md:hidden transition-all duration-300 overflow-hidden bg-white border-t text-sm font-medium text-gray-800 ${
    menuOpen ? 'max-h-[500px] py-4 px-4' : 'max-h-0 py-0 px-4'
  }`}
  style={{ transitionProperty: 'all' }}
>
  <nav className="flex flex-col gap-2">
    {[
      { href: '/', label: 'INICIO' },
      { href: '/nosotros', label: 'QUIÉNES SOMOS' },
      { href: '/localizacion', label: 'LOCALIZACIÓN' },
      { href: '/servicios', label: 'SERVICIOS' },
      { href: '/horario', label: 'HORARIO' },
    ].map(({ href, label }) => (
      <a
        key={href}
        href={href}
        className="relative hover:text-lime-800 transition after:absolute after:left-0 after:-bottom-1 
        after:h-[2px] after:w-0 after:bg-lime-800 after:transition-all hover:after:w-full"
      >
        {label}
      </a>
    ))}
    <a
      href='/citas'
      className="mt-2 inline-block bg-lime-800 text-white px-4 py-2 rounded text-center hover:bg-lime-700 transition"
    >
      Pedir cita
    </a>
  </nav>
</div>
        {/* Teléfono y correo (siempre visible) */}
        <div className="flex flex-wrap items-center gap-4 text-lg px-4 py-0 font-medium text-gray-700">
          <div className="flex items-center gap-2">
            <Phone className="text-lime-800 w-5 h-5"/>
            <span className="hover:text-lime-800">954 80 80 91</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="text-lime-800 w-5 h-5" />
            <a href="mailto:asesoria@asesoriallamas.com" className="hover:text-lime-800">asesoria@asesoriallamas.com</a>
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-lime-800 w-5 h-5"/>
            <a href="https://wa.me/34609040289" className="hover:text-lime-800">609 04 02 89</a>
          </div>
        </div>
      </header>
  );
}