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
Creada en el 1996, la inquietud de su fundador <strong>José Manuel Llamas Castellano</strong>, entendió que debía de dar salida a las necesidades de sus vecinos que se quejaban de un servicio integral 360º. Se comenzó por ir implementando poco a poco nuevos servicios y colaboraciones, de las cuales está muy agradecido. El motor principal de <strong>Asesoría Llamas</strong> ha sido el inconformismo con hacer las cosas siempre igual, mejorando
 y creciendo con las nuevas tecnologías que a veces tan tediosas son, pero que al mismo tiempo tan necesarias y a su vez, sacándoles el máximo rendimiento a cada aplicación.
Hemos pasado de la inexcusable presencialidad al teletrabajo en poco tiempo y por ello debemos de aprovechar esta ventaja como oportunidad que nos ofrece la tecnología para abrirnos a más clientes y crecer juntos.
Estamos muy entusiasmados con esta época que nos ha tocado vivir, a pesar de los pesares, pues entendemos que la tecnología no aleja al cliente de la Asesoría, sino que lo acerca.
Creemos que estamos en el camino correcto con la digitalización de nuestro despacho, pues como dijo otro asesor, <strong>"o te digitalizas o te digitalizan"</strong>. El rumbo está marcado y no tiene vuelta atrás y por ello queremos contar con clientes tecnológicamente avanzados para compartir y crecer juntos.
Entiendo que somos una buena opción si estás buscando un servicio integral y cercano.
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
