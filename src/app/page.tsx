'use client';
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
       <section
        className="relative h-screen bg-center bg-cover bg-no-repeat flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: "url('/portada.jpg')",
        }}
      >
        {/*Capa transparente negra*/}
        <div className="absolute inset-0 bg-black/45 z-0"/>
        {/*Contenido*/}
        <div className="relative z-10 px-4 h-100">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Asesoría Llamas</h1>
          <p className="text-lg md:text-2xl">
        Tu asesoría de confianza en La Puebla de los Infantes
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center py-4">
        <a
        href="/servicios"
        className="inline-block bg-white text-lime-800 font-semibold px-6 py-3 rounded hover:bg-blue-800 hover:text-white transition"
      >
        Ver servicios
      </a>
      <a
        href="/cita"
        className="inline-block border border-white px-10 rounded py-3 hover:bg-white hover:text-lime-800 transition"
      >
        Pedir cita
      </a>
      </div>
      <p className="text-lg md">Especialistas en asesoramiento fiscal, laboral y contable para autónomos, empresas y particulares. 
        Más de 30 años ofreciendo soluciones personalizadas.</p>
        </div>
        </section>
        {/*Apartado sobre Jose Manuel Llamas*/}
         <section className="px-4 py-12 bg-white max-w-6xl mx-auto" id="sobre-mi">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Foto a la izquierda */}
        <div className="w-full md:w-1/3">
          <Image
            src="/joseManuel.jpg" // Asegúrate de tener esta imagen en public/images/
            alt="Jose Manuel Llamas"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full"
          />
        </div>

        {/* Texto a la derecha */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-[#4b6e00]">José Manuel Llamas</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Hola, soy <strong>José Manuel Llamas Castellano</strong>, dirijo una Asesoría Fiscal, laboral y Contable,
             y además contamos con Seguros Generali  y asuntos inmobiliarios, desde hace mas de 30 años.    
  “Para servir, servir.” <br/>
  En <strong>Asesoría Llamas</strong> creemos que el verdadero valor está en la atención cercana, eficaz y comprometida con nuestros clientes. 
  Estamos aquí para <strong>ayudarte</strong>, siempre.
          </p>
        </div>
      </div>
    </section>
        {/*Apartado de servicios de inicio*/}
    <section>


    </section>
    </main>
  );
}
