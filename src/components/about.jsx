import React from "react";
import blockchain from "../assets/icon-block.svg";
import dev from "../assets/icon-dev.svg";
import design from "../assets/icon-design.svg";

export default function About() {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm Sarthak, a passionate MERN Stack Developer with a strong grasp of
          both front-end and back-end development. I specialize in building
          scalable web applications and have a keen interest in problem-solving
          and optimizing performance.
        </p>

        <p>
          As a tech enthusiast, I enjoy keeping up with the latest trends in
          software development, including Web3, Blockchain, and AI. I believe
          in continuous learning and strive to integrate modern technologies
          into my projects.
        </p>

        <p>
          Besides development, I have experience in UI/UX design, ensuring that
          the applications I build are both functional and aesthetically
          pleasing. I am always eager to take on new challenges and
          collaborate on exciting projects.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I'm Doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src={dev} alt="Web development icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web Development</h4>

              <p className="service-item-text">
                Building modern and scalable web applications using the MERN
                stack and other cutting-edge technologies.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src={blockchain} alt="Blockchain icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Blockchain</h4>

              <p className="service-item-text">
                Exploring Web3 technologies and smart contract development to
                build decentralized applications.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src={design} alt="UI/UX Design icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">UI/UX Design</h4>

              <p className="service-item-text">
                Creating intuitive and visually appealing user interfaces to
                enhance the user experience.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}
