import React from "react";
import SkillsGrid from "./skills";
import { MdOutlineWork } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Resume() {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">About Me</h2>
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
              Web and Mobile Developer Intern - <i>C-DAC</i>
            </h4>
            <span>July 2024 — Present</span>
            <p className="timeline-text">
              • <b>Developed a Calendar Application:</b> Built a fully functional event management system with JWT authentication, role-based access control, event/task management, and guest email notifications using React.js, Node.js, and MongoDB.
              <br />• <b>Built a Mobile App:</b> Converted the web app into a React Native mobile application with similar features.
              <br />• <b>Enhanced User Experience:</b> Designed a responsive UI with language, theme, and timezone customization.
              <br />• <b>Technologies Used:</b> React.js, React Native, Node.js, Express.js, MongoDB, Tailwind CSS, i18Next, JWT authentication.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Web Developer Intern - <i>AdGlobal360</i>
            </h4>
            <span>Feb. 2024 — Apr. 2024</span>
            <p className="timeline-text">
              • <b>UI/UX Enhancement:</b> Improved website performance by optimizing React components and enhancing UI/UX for a seamless user experience.
              <br />• <b>Technologies Used:</b> React.js, JavaScript, HTML, CSS.
            </p>
          </li>
        </ol>
      </section>
      <section className="skill pb-8">
        <h3 className="h3 skills-title">My Skills</h3>
        <ul className="skills-list content-card">
          <SkillsGrid />
        </ul>
      </section>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoDocumentTextOutline />
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              B.Tech in Computer Science Engineering - <i>Maharishi Dayanand University</i>
            </h4>
            <span>2020 — 2024</span>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Higher Secondary School - <i>GAV Public School</i>
            </h4>
            <span>2020</span>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Secondary School - <i>GAV Public School</i>
            </h4>
            <span>2018</span>
          </li>
        </ol>
      </section>

    </article>
  );
}
