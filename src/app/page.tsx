"use client";
import Image from "next/image";
import Welcome from "./components/welcome";
import BasicReact from "./components/BasicReact";
import Calc from "./components/calc";
import Stopwatch from "./components/stopwatch";
import SimpleAPI from "./components/SimpleAPI";
import Spline from '@splinetool/react-spline/next';
import Robo from "./Robo";
import Limit from "./components/Text-limite"
import Github from "./components/GithubAPI";


export default function Home() {
  return (

    <main>
      <section className="min-h-screen">
        <Welcome />
      </section>
      <section>
        <BasicReact />
      </section>
      <section>
        <Calc />
        <Stopwatch />
      </section>
      <section>
        <SimpleAPI />
      </section>
      <section>
        <Limit />
      </section>
      <section className="min-h-screen text-black">
      <Github/>
      </section>
      <section className="max-h-screen ">
        <Robo />
      </section>

    </main>
  );
}
