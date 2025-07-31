import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asesoría Llamas",
  description: "Fiscal, laboral y contable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <main>{children}</main>
         {/* CTA global */}
        <section className="bg-lime-800 text-white p-6 rounded text-center shadow space-y-2 mx-4 my-8">
          <h3 className="text-xl font-bold">¿Necesitas asesoramiento?</h3>
          <p>Contacta con nosotros y estaremos encantados de ayudarte.</p>
          <a
            href="/citas"
            className="inline-block bg-white text-lime-800 px-4 py-2 rounded hover:bg-gray-100 transition font-semibold"
          >
            Pedir cita
          </a>
        </section>
      </body>
    </html>
  );
}
