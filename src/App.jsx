import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import References from "./components/References";

function App() {
  const [about, setAbout] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost/Portfolio/backend/api/about.php")
      .then((res) => res.json())
      .then(setAbout);

    fetch("http://localhost/Portfolio/backend/api/skills.php")
      .then((res) => res.json())
      .then(setSkills);

    fetch("http://localhost/Portfolio/backend/api/projects.php")
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  return (
    <div className="bg-light text-dark">
      <Hero />
      {about && <About data={about} highlights={about.highlights} />}
      <Skills data={skills} />
      <Projects data={projects} />
      <References />
      <Contact />
    </div>
  );
}

export default App;