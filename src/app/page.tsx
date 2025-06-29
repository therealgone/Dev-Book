
"use client";
import Image from "next/image";
import Welcome from "./components/welcome";
import BasicReact from "./components/BasicReact";



export default function Home() {
  return (
    
    <main>
      <section className="min-h-screen">
      <Welcome/>
      </section>
      <section>
        <BasicReact/>
      </section>
    </main>
  );
}
