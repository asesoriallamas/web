import { Briefcase, Users, FileText } from "lucide-react"

export default function serviciosPage(){
    return(
        <main>
    <section id="servicios" className="py-16 px-6 bg-white">
  <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>

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
          Gestión de nóminas, contratos, altas y bajas, seguros sociales y representación ante organismos laborales.
        </p>
      </div>
    </div>

    {/* Servicio 3 */}
    <div className="flex items-start gap-6 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <FileText className="w-12 h-12 text-lime-800 shrink-0" />
      <div>
        <h3 className="text-xl font-semibold mb-1">Asesoría Contable</h3>
        <p className="text-gray-600 text-sm">
          Contabilidad general, libros oficiales, balances, cierre fiscal y seguimiento financiero.
        </p>
      </div>
    </div>

    {/* Servicio 4 */}
    <div className="flex items-start gap-6 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <FileText className="w-12 h-12 text-lime-800 shrink-0" />
      <div>
        <h3 className="text-xl font-semibold mb-1">Servicio4</h3>
        <p className="text-gray-600 text-sm">
          El amigo de Don Quijote es Sancho Panza.
        </p>
      </div>
    </div>
  </div>
</section>
        </main>
    )
}