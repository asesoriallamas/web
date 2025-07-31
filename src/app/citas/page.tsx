import { CalendarIcon } from "lucide-react";

export default function Citas() {
  return (
    <div style={{ padding: '2rem 1rem', minHeight: '80vh' }}>
      <div className="flex items-center justify-center gap-3 mb-10">
            <CalendarIcon className="w-8 h-8 text-lime-800" />
            <h2 className="text-3xl font-bold text-center">Reserva tu cita</h2>
          </div>
      <iframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0LiTYwagvEo-yZI8Rnj-kQTiQs5Gr-_I9BoGi6tpkB5jywudw4NNUdY8dJO6jROMGqBeiflgnB?gv=true"
        style={{ border: 0 }}
        width="100%"
        height="600"
        loading="lazy"
      ></iframe>
    </div>
  );
}
