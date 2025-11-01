// Metadatos SEO
export const metadata = {
  title: "Horario | Asesoría Llamas",
  description:"Consulta nuestro horario y visitanos."}


import { Clock } from "lucide-react";

export default function Horario() {
  return (
    <main>
      <section id="horario" className="py-16 px-6 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Clock className="w-8 h-8 text-lime-800" />
            <h2 className="text-3xl font-bold text-center">Horario de atención</h2>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="w-full text-left text-gray-700">
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Lunes</td>
                  <td className="py-3 px-4">9:30 - 13:00 y 17:00 - 20:00</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Martes</td>
                  <td className="py-3 px-4">9:30 - 13:00 y 17:00 - 20:00</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Miércoles</td>
                  <td className="py-3 px-4">9:30 - 13:00 y 17:00 - 20:00</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Jueves</td>
                  <td className="py-3 px-4">9:30 - 13:00 y 17:00 - 20:00</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Viernes</td>
                  <td className="py-3 px-4">9:30 - 13:00 y 17:00 - 20:00</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Sábado</td>
                  <td className="py-3 px-4">Cerrado - Pedir Cita</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Domingo</td>
                  <td className="py-3 px-4">Cerrado - Pedir Cita</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
