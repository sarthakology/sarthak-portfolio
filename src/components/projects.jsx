import React from "react";
import { IoEyeSharp } from "react-icons/io5";

import gym from "../assets/projects/gym-fitness.png";

export default function Projects() {
  const projectsData = [

    {
      name: "Gym Fitness",
      liveLink: "https://gym-fitness-ten.vercel.app/",
      github: "https://github.com/adiabhiraj195/gym-fitness",
      image: gym,
      catogery: "Reactjs",
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
