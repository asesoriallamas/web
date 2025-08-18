// Metadatos SEO
export const metadata = {
  title: "Nuestros Servicios | Asesoría Llamas",
  description:
    "Descubre nuestros servicios de asesoría fiscal, laboral, contable, seguros, tráfico, herencias y mucho más en La Puebla de los Infantes. Atención profesional y cercana.",
};

import { Briefcase, Users, FileText,Car, Home, Landmark,Shield, Handshake } from "lucide-react"

export default function serviciosPage(){
    return(
        <main>
    <section id="servicios" className="py-16 px-6 bg-gradient-to-b from-white to-gray-100">
   <div className="flex items-center justify-center gap-3 mb-12 z-10">
    <Handshake className="w-8 h-8 text-lime-800" />
    <h2 className="text-4xl font-bold text-lime-800 text-center">Nuestros Servicios</h2>
  </div>
  <div className="space-y-6 max-w-4xl mx-auto">
    {/* Servicio 1 */}
    <div className="flex items-start gap-6 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <Briefcase className="w-12 h-12 text-lime-800 shrink-0" />
      <div>
        <h3 className="text-xl font-semibold mb-1">Asesoría Fiscal</h3>
        <p className="text-gray-600 text-sm">
          Declaraciones de la renta, IVA, IRPF, impuestos locales, y planificación fiscal personalizada.
        </p>
      </div>
    </div>

    {/* Servicio 2 */}
    <div className="flex items-start gap-6 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <Users className="w-12 h-12 text-lime-800 shrink-0" />
      <div>
        <h3 className="text-xl font-semibold mb-1">Asesoría Laboral</h3>
        <p className="text-gray-600 text-sm">
          Gestión de nóminas, contratos, peonadas, altas y bajas, seguros sociales y representación ante organismos laborales.
        </p>
      </div>
    </div>


  {/* Servicio 3 */}
    <div className="flex items-start gap-6 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <Shield className="w-12 h-12 text-lime-800 shrink-0" />
      <div>
        <h3 className="text-xl font-semibold mb-1">Seguros Generali</h3>
        <p className="text-gray-600 text-sm">
          Contratación, gestión y asistencia de seguros de hogar, autos, vida, accidentes, decesos y más.
        </p>
         <a
      href="https://www.generali.es/agente/contaestrellasl"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-lime-800 font-medium hover:underline"
    >
      Más información →
    </a>
      </div>
    </div>

    {/* Servicio 4 */}
    <div className="flex items-start gap-6 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <FileText className="w-12 h-12 text-lime-800 shrink-0" />
      <div>
        <h3 className="text-xl font-semibold mb-1">Asesoría Contable</h3>
        <p className="text-gray-600 text-sm">
          Contabilidad general, libros oficiales, balances, cierre fiscal y seguimiento financiero.
        </p>
      </div>
    </div>

    {/* Servicio 5 */}
    <div className="flex items-start gap-6 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <Car className="w-12 h-12 text-lime-800 shrink-0" />
      <div>
        <h3 className="text-xl font-semibold mb-1">Gestiones de tráfico</h3>
        <p className="text-gray-600 text-sm">
          Transferencias de vehículos, duplicados de permisos, informes de titularidad y bajas definitivas entre otros.
        </p>
      </div>
    </div>

    {/* Servicio 6 */}
    <div className="flex items-start gap-6 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <Home className="w-12 h-12 text-lime-800 shrink-0" />
      <div>
        <h3 className="text-xl font-semibold mb-1">Portal Inmobiliario</h3>
        <p className="text-gray-600 text-sm">
          Gestión de compraventa, tramitación de herencias, cálculo de plusvalía y acompañamiento notarial.
        </p>
         <a
      href="https://www.instagram.com/asesoriallamas"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-lime-800 font-medium hover:underline"
    >
      Visitar disponibilidad en Instagram →
    </a>
      </div>
    </div>
    
      {/* Servicio 7 */}
    <div className="flex items-start gap-6 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <Landmark className="w-12 h-12 text-lime-800 shrink-0" />
      <div>
        <h3 className="text-xl font-semibold mb-1">Trámites Administrativos Generales</h3>
        <p className="text-gray-600 text-sm">
          Certificados, ayudas, licencias, escritos, recursos y todo tipo de gestiones ante organismos públicos.
        </p>
      </div>
    </div>

  </div>
</section>
        </main>
    )
}