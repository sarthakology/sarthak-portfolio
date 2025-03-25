import React, { useState } from "react";
import Navbar from "./navbar";
import About from "./about";
import Resume from "./resume";
import Projects from "./projects";
import Contact from "./contact";

export default function Body() {
  const [navlink, setNavlink] = useState("about");

  return (
    <div className="main-content">
      <Navbar setNavlink={setNavlink} />
      {navlink === "resume" && <Resume />}
      {navlink === "about" && <About />}
      {navlink === "projects" && <Projects />}
      {navlink === "contact" && <Contact />}
    </div>
  );
}
