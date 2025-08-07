// Metadatos SEO
export const metadata = {
  title: "Localización | Asesoría Llamas",
  description:
    "Descubre dónde visitarnos para brindarte el mejor servicio.",
};


import { MapPin } from "lucide-react"

export default function localizacion(){
    return(
        <main>
             <section className="px-4 py-8 bg-white text-center" id="localizacion">
        
      <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-0.5">
  <MapPin className="w-8 h-8 text-lime-800" />
  ¿Dónde estamos?
</h2>
      
      <div className="mb-4">
        <iframe
          title="Mapa de ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.5191887953695!2d-5.3923977!3d37.7663506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1269a0ec48b71f%3A0x1a0e31215e34efb3!2sC.%20Genaro%20Mart%C3%ADnez%2C%2010%2C%2041479%20La%20Puebla%20de%20los%20Infantes%2C%20Sevilla!5e0!3m2!1ses!2ses!4v1690202845283!5m2!1ses!2ses"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="flex flex-col gap-3 items-center">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=C.%20Genaro%20Mart%C3%ADnez%2C%2010%2C%2041479%20La%20Puebla%20de%20los%20Infantes"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition"
        >
          Cómo llegar (Google Maps)
        </a>
      </div>
    </section>a
        </main>
    )
}