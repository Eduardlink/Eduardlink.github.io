"use client";

import Image from "next/image";
import Sidebar from "@/components/sidebar/Sidebar";
import SocialSidebar from "@/components/socialSidebar/SocialSidebar";
import Inicio from "@/components/inicio/Inicio";
import Stack from "@/components/stack/Stack";
import Proyectos from "@/components/proyectos/Proyectos";
import Contacto from "@/components/contacto/Contacto";
import Experiencia from "@/components/experiencia/Experiencia";
import { HabilidadesBlandas } from "@/components/habilidadesBlandas/HabilidadesBlandas";
import { Hobbies } from "@/components/hobbies/Hobbies";
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Toaster />
      <div className="sidebarP">
        <Sidebar />
      </div>
      <div className="social-sidebar">
        <SocialSidebar />
      </div>
      <div className="landing">
        <section id="inicio">
          <Inicio />
        </section>
        <section id="stack">
          <Stack/>
        </section>
        <section className="habilidadesBlandas">
          <HabilidadesBlandas></HabilidadesBlandas>
        </section>
        <section className="hobbies">
          <Hobbies></Hobbies>
        </section>
        <section id="experiencia">
          <Experiencia></Experiencia>
        </section>
        <section id="proyectos" className="seccionProyectos">
          <Proyectos/>
        </section>
        <section>
          <Contacto />
        </section>
      </div>
    </main>
  );
}
