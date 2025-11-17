import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import References from "./components/References";

function App() {
  // Static data instead of fetching from backend
  const aboutData = {
    name: "Rodgine Mallari",
    description: "I'm a Full Stack Developer...",
    highlights: [
      "Proficient in React, Laravel, and C#",
      "Experience building e-commerce and POS systems",
      "Passionate about clean, maintainable code"
    ]
  };

  const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Laravel",
    "Bootstrap",
    "C#",
    "SQL",
    ".NET Framework",
    ".NET MAUI",
    "REST APIs",
    "PHP"
  ];

  const projectsData = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio website built with React",
      link: "https://github.com/your-username/portfolio"
    },
    {
      title: "Vintage Closet",
      description: "E-commerce site built with Laravel and React",
      link: "https://github.com/your-username/vintage-closet"
    },
    {
      title: "SKRMS Automation",
      description: "Automated report and email system built with C# Selenium",
      link: "https://github.com/your-username/skrms-automation"
    }
    // Add more projects as needed
  ];

  return (
    <div className="bg-light text-dark">
      <Hero />
      <About data={aboutData} highlights={aboutData.highlights} />
      <Skills data={skillsData} />
      <Projects data={projectsData} />
      <References />
      <Contact />
    </div>
  );
}

export default App;