// Metadatos SEO
export const metadata = {
  title: "Quiénes somos | Asesoría Llamas",
  description:
    "Descubre nuestra historia y mucho más. Atención profesional y cercana.",
};

import Image from "next/image";

export default function NosotrosPage() {
  return (
    <main className="w-full px-4 py-12 text-gray-800 space-y-16">
      
      {/* Presentación con imagen 70/30 */}
      <section className="flex flex-col md:flex-row gap-10 items-center">
        {/* Texto 70% */}
        <div className="md:w-[70%] w-full space-y-4 text-justify leading-relaxed">
          <h1 className="text-4xl font-bold text-lime-800">Quiénes Somos</h1>
          <p className="text-lg text-gray-600">
En <strong>Asesoría Llamas</strong>, llevamos más de tres décadas ofreciendo servicios integrales de asesoramiento fiscal, laboral, 
contable y mercantil a particulares, autónomos, empresas y entidades de toda índole. 
Nos encontramos en La Puebla de los Infantes (Sevilla), desde donde hemos construido una sólida reputación basada en la cercanía,
la confianza y el compromiso con cada cliente a lo largo de toda nuestra historia desde nuestra apertura en 1993.
Creemos firmemente que el asesoramiento no debe limitarse al cumplimiento de obligaciones legales o tributarias,
sino que debe ser una herramienta estratégica que ayude a las personas y negocios a tomar mejores decisiones,
optimizar sus recursos y planificar su futuro con seguridad. Por eso, nos implicamos de manera personalizada con cada caso,
analizando, planificando y actuando con profesionalidad y responsabilidad.
Contamos con un equipo humano especializado y en continua formación, capaz de adaptarse a los constantes cambios normativos y
ofrecer soluciones actualizadas, claras y eficaces.<br/><br/> En Asesoría Llamas apostamos por la transparencia, la ética profesional y el trato cercano como pilares fundamentales de nuestro trabajo.
Nuestra misión es ayudarte a cumplir con tus obligaciones y a crecer con tranquilidad,
sabiendo que estás respaldado por profesionales que te escuchan y te acompañan en cada paso. 
Ya sea para gestionar tus impuestos, llevar tu contabilidad, resolver un problema laboral o planificar una operación societaria,
en Asesoría Llamas estarás siempre en buenas manos.
          </p>
        </div>

        {/* Imagen 30% */}
        <div className="md:w-[30%] w-full flex justify-center">
          <Image
          src="/nosotros.jpg"
          width={600}
          height={900}
            alt="Equipo de Asesoría Llamas"
            className="rounded shadow-lg max-w-[300px] w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Valores */}
      <section>
        <h2 className="text-2xl font-semibold text-lime-700 mb-6">Nuestros Valores</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <li className="bg-white shadow p-4 rounded border-l-4 border-lime-700">
            ✅ Trato cercano y personalizado
          </li>
          <li className="bg-white shadow p-4 rounded border-l-4 border-lime-700">
            🧾 Rigor técnico y legal
          </li>
          <li className="bg-white shadow p-4 rounded border-l-4 border-lime-700">
            🤝 Transparencia y ética
          </li>
          <li className="bg-white shadow p-4 rounded border-l-4 border-lime-700">
            📅 Puntualidad y compromiso
          </li>
          <li className="bg-white shadow p-4 rounded border-l-4 border-lime-700">
            💼 Confidencialidad y profesionalidad
          </li>
        </ul>
      </section>

    </main>
  );
}
