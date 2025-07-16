"use client";
import Welcome from "./components/welcome";
import BasicReact from "./components/BasicReact";
import Calc from "./components/calc";
import Stopwatch from "./components/stopwatch";
import SimpleAPI from "./components/SimpleAPI";
import Limit from "./components/Text-limite";
import Github from "./components/GithubAPI";
import Section from "./components/Section";
import Animation from "./components/animation";


export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section - Standalone Welcome */}
      <section id="welcome" className="min-h-screen flex flex-col justify-center">
        <Welcome />
      </section>

      {/* React Basics Section */}
      <Section
        id="react"
        title="React Basics"
        description="Master the fundamentals of React with interactive examples and real-world applications."
      >
        <div className="card-modern">
          <BasicReact />
        </div>
      </Section>

      {/* Calculator Section */}
      <Section
        id="calc"
        title="Calculator"
        description="A modern calculator built with React, showcasing state management and user interactions."
      >
        <div className="card-modern">
          <Calc />
        </div>
      </Section>

      {/* Stopwatch Section */}
      <Section
        id="stopwatch"
        title="Stopwatch"
        description="A precise stopwatch with start, stop, and reset functionality, demonstrating React hooks and timing."
      >
        <div className="card-modern">
          <Stopwatch />
        </div>
      </Section>

      {/* API Section */}
      <Section
        id="api"
        title="Weather API"
        description="Connect to real-world APIs and display dynamic data with React components."
      >
        <div className="card-modern">
          <SimpleAPI />
        </div>
      </Section>

      {/* Text Tools Section */}
      <Section
        id="text"
        title="Text Tools"
        description="Utility tools for text processing, character counting, and input validation."
      >
        <div className="card-modern">
          <Limit />
        </div>
      </Section>

      {/* GitHub Section */}
      <Section
        id="github"
        title="GitHub Integration"
        description="Search and display GitHub profiles, showcasing API integration and data visualization."
      >
        <div className="card-modern">
          <Github />
        </div>
      </Section>
      <Section
id='UI Animation'
title="UI Animation"
description="UI Animation and styles ">
  <div className="card-modern">
  <Animation></Animation>  
  </div>

</Section>
    </main>
  );
}
