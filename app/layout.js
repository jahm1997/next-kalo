"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });
// import { conn } from "./mongoose/mongoConfig";

export const metadata = {
  title: "challenger One",
  description:
    "Desarrollar una aplicación web que permita a los usuarios crear y gestionar sus propios portfolios personales. La aplicación debe ser construida utilizando NextJS/ReactJS, AWS y Wordpress, e incluir las siguientes características:\n Autenticación de usuarios: Los usuarios deben poder registrarse e iniciar sesión en la plataforma utilizando su dirección de correo electrónico y contraseña. Los datos de los usuarios y las contraseñas deben ser almacenados de forma segura y encriptados.\n Creación de portfolios: Los usuarios deben poder crear un nuevo portfolio, incluyendo su información personal, educación, experiencia laboral y proyectos. Los proyectos deben incluir el nombre del proyecto, descripción e imagen opcional.\n Edición de portfolios: Los usuarios deben poder editar y actualizar sus portfolios.\n Recuperación de portfolios: Los usuarios deben poder obtener una lista de todos sus portfolios publicados desde su sitio web de Wordpress utilizando la API de Wordpress.\n Publicación de portfolios: Los usuarios deben poder publicar sus portfolios en su sitio web de Wordpress utilizando la API de Wordpress.Integración de AWS S3: Permitir a los usuarios cargar y recuperar archivos desde un bucket de S3, como imágenes para los proyectos de sus portfolios.Rendimiento: Asegurarse de que la plataforma sea escalable y tenga un buen rendimiento bajo un alto tráfico.\n Documentación: Documentar el código de la plataforma, incluyendo instrucciones de instalación y uso.\n Para completar el desafío, el desarrollador debe:Configurar un servidor NextJS/ReactJS y conectarlo a un bucket de AWS S3.Implementar un sistema de autenticación de usuarios utilizando contraseñas encriptadas y con sal para mayor seguridad. Desarrollar la funcionalidad para crear, editar y eliminar portfolios.\n Integrar la API de Wordpress para permitir a los usuarios publicar y recuperar sus portfolios  Asegurarse de que los datos de los usuarios y las contraseñas se almacenen de forma segura y encriptada.\n Optimizar el rendimiento de la plataforma para un alto tráfico. Documentar el código de la plataforma, incluyendo instrucciones de instalación y uso",
  keywords: "next js,react js, aws, wordpress",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {/* {pathname === "/" ? false : <Navigation />} */}
        {children}
      </body>
    </html>
  );
}
