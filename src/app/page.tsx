'use client';
import Image from "next/image";
import Link from "next/link";

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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Asesoría Llamas prueba</h1>
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
        href="#cita"
        className="inline-block border border-white px-10 rounded py-3 hover:bg-white hover:text-lime-800 transition"
      >
        Pedir cita
      </a>
      </div>
      <p className="text-lg md">Especialistas en asesoramiento fiscal, laboral y contable para autónomos, empresas y particulares. 
        Más de 20 años ofreciendo soluciones personalizadas.</p>
        </div>
        </section>

    </main>
  );
}
