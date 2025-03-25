import React from "react";
import SkillsGrid from "./skills";
import { MdOutlineWork } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Resume() {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <MdOutlineWork />
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Web Developer Intern - <i>C-DAC</i>
            </h4>
            <span>Feb. 2025 — Present</span>
            <p className="timeline-text">
              • <b>Developed a Calendar Application:</b> Built a fully functional event management system using React.js, Tailwind CSS, and React Native.
              <br />• <b>Implemented Role-Based Access:</b> Created JWT authentication and access control for users and admins.
              <br />• <b>Enhanced User Experience:</b> Designed a responsive UI with language and theme customization.
              <br />• <b>Technologies Used:</b> React.js, React Native, Node.js, Express.js, MongoDB, Tailwind CSS, i18Next, and JWT authentication.
            </p>
          </li>
        </ol>
      </section>

      <a
        href="https://github.com/sarthakology"
        className="text-white text-sm my-3 lg:hidden flex items-center justify-center bg-[#ffbb5c] py-1 rounded"
      >
        Github
      </a>
      <a
        href="https://drive.google.com/file/d/1FsNhOKMP0N_lMtwjgx9vVSi-0G5Xxyth/view?usp=sharing"
        className="text-white text-sm my-3 lg:hidden flex items-center justify-center bg-[#ffbb5c] py-1 rounded"
        download="resume"
      >
        <IoDocumentTextOutline />
        Download Resume
      </a>

      <section className="skill">
        <h3 className="h3 skills-title">My Skills</h3>
        <ul className="skills-list content-card">
          <SkillsGrid />
        </ul>
      </section>
    </article>
  );
}
