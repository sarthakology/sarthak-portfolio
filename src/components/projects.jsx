import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import gym from "../assets/projects/gym-fitness.png";
import calendar from "../assets/projects/calendar.png"
export default function Projects() {
  const projectsData = [

    {
      name: "Fitness Plan Generator",
      liveLink: "https://sarthakology.github.io/Fitness-Plan-Generator/",
      image: gym,
      catogery: "Reactjs, tailwind",
    },
    {
      name: "Calendar",
      liveLink: "https://sarthakology.github.io/react-calendar/",
      image: calendar,
      catogery: "Reactjs, tailwaind",
    },
  ];

  return (
    <article className="portfolio active" data-page="projects">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">
        <ul className="project-list">
          {projectsData.map(({ name, liveLink, image, catogery }) => {
            return (
              <li
                className="project-item active"
                data-filter-item
                data-category="web development"
                key={name}
              >
                <a href={liveLink}>
                  <figure className="project-img">
                    <div
                      className="project-item-icon-box"
                      data-project-btn
                      data-link={liveLink}
                    >
                      <IoEyeSharp />
                    </div>

                    <img src={image} alt="finance" loading="lazy" />
                  </figure>

                  <h3 className="project-title">{name}</h3>

                  <p className="project-category">{catogery}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
}
