import Link from "next/link";
import { Briefcase, Users, FileText, Car, Home, Landmark, Shield, Handshake } from "lucide-react";
import { useState } from "react";

const servicios = [
  { icon: Briefcase, title: "Asesoría Fiscal" },
  { icon: Users, title: "Asesoría Laboral" },
  { icon: Shield, title: "Seguros Generali" },
  { icon: FileText, title: "Asesoría Contable" },
  { icon: Car, title: "Gestiones de tráfico" },
  { icon: Home, title: "Portal Inmobiliario" },
  { icon: Landmark, title: "Trámites Administrativos" },
];

export default function ServiciosCarrusel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % servicios.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + servicios.length) % servicios.length);
  };

  const getItem = (indexOffset: number) => {
    const index = (currentIndex + indexOffset + servicios.length) % servicios.length;
    return servicios[index];
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-white">
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          <Handshake className="w-7 h-7 text-lime-800" />
          <h2 className="text-3xl font-bold text-lime-800 text-center">Nuestros Servicios</h2>
        </div>

        <div className="relative w-full max-w-6xl flex items-center justify-center gap-4 overflow-hidden px-2">
          <div className="flex transition-transform duration-500 ease-in-out w-full justify-center">
            {[getItem(-1), getItem(0), getItem(1)].map((servicio, i) => {
              const Icon = servicio.icon;
              const isCenter = i === 1;
              const handleClick = () => {
                if (i === 0) handlePrev();
                else if (i === 2) handleNext();
              };
              return (
                <div
                  key={servicio.title}
                  onClick={handleClick}
                  className={`flex flex-col items-center bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md mx-1 sm:mx-2 w-40 sm:w-60 transition-all duration-500 ease-in-out cursor-pointer
                    ${isCenter ? "scale-100 opacity-100 cursor-default" : "scale-90 opacity-50 hover:opacity-70"}`}
                >
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-lime-800 mb-2" />
                  <h3 className="text-sm sm:text-lg font-semibold text-center">{servicio.title}</h3>
                </div>
              );
            })}
          </div>
        </div>

        <Link
          href="/servicios"
          className="mt-4 text-sm text-lime-800 font-medium hover:underline"
        >
          Ver todos los servicios →
        </Link>
      </div>
    </section>
  );
}