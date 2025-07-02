
"use client";
import Image from "next/image";
import Welcome from "./components/welcome";
import BasicReact from "./components/BasicReact";
import Calc from "./components/calc";
import Stopwatch from "./components/stopwatch";



export default function Home() {
  return (
    
    <main>
      <section className="min-h-screen">
      <Welcome/>
      </section>
      <section>
        <BasicReact/>
      </section>
      <section>
       <Calc/>
       <Stopwatch/>
      </section>
      
    </main>
  );
}
