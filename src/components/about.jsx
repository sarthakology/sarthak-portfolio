import React from "react";

export default function About() {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">I'm Sarthak!</h2>
      </header>

      <section className="about-text">
        <p>
          Passionate and detail-oriented web and mobile app developer with a strong drive to create impactful and efficient solutions. I thrive in challenging environments, constantly looking for opportunities to expand my knowledge and push the boundaries of what I can do with technology.
        </p>

        <p>
          I am fascinated by the power of code to solve real-world problems, and I enjoy combining my technical expertise with creative thinking. Whether it's building seamless user interfaces, architecting robust back-end systems, or exploring new tools and frameworks, I am always eager to dive into new challenges and learn from them.
        </p>

        <p>
          Outside of programming, I am passionate about fitness, which fuels my determination and drive in both my personal and professional life. I believe in the importance of continuous growth, both as a developer and as an individual, and I am always seeking to improve myself and those around me.
        </p>

        <p>
          I enjoy collaborating with like-minded individuals, exchanging ideas, and contributing to projects that make a difference. My goal is to leverage my skills to create impactful software solutions that empower users and make a meaningful contribution to the tech community.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I'm Doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <span className="material-icons text-white" style={{ fontSize: "40px" }}>web</span>
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web Development (React & Tailwind)</h4>
              <p className="service-item-text">
                Building modern, scalable web applications with React.js and styling them with Tailwind CSS for clean, responsive designs.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <span className="material-icons text-white" style={{ fontSize: "40px" }}>phone_iphone</span>
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">App Development (React Native)</h4>
              <p className="service-item-text">
                Developing mobile applications using React Native to create high-performance, cross-platform apps for both iOS and Android.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <span className="material-icons text-white" style={{ fontSize: "40px" }}>code</span>
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Backend Development (Node & Express)</h4>
              <p className="service-item-text">
                Building powerful backends using Node.js and Express.js, ensuring fast, scalable, and secure APIs for web and mobile applications.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <span className="material-icons text-white" style={{ fontSize: "40px" }}>storage</span>
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Database Management (MongoDB / SQL)</h4>
              <p className="service-item-text">
                Managing and optimizing databases using MongoDB and SQL to store and retrieve data efficiently for dynamic applications.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <span className="material-icons text-white" style={{ fontSize: "40px" }}>brush</span>
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">UI/UX Design (Figma)</h4>
              <p className="service-item-text">
                Designing intuitive and visually appealing user interfaces using Figma to create seamless user experiences.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <span className="material-icons text-white" style={{ fontSize: "40px" }}>photo</span>
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Photo & Video Editing (Final Cut Pro / Photoshop)</h4>
              <p className="service-item-text">
                Editing and enhancing photos and videos using Final Cut Pro and Photoshop to create professional-level media content.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}
