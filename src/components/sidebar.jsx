import React from "react";
import myAvatar from "../assets/my-avatar.png";
import {
  IoMailOutline,
  IoDocumentTextOutline,
  IoLocationOutline,
  IoLogoLinkedin,
  IoLogoGithub,
} from "react-icons/io5";

export default function Sidebar() {
  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={myAvatar} alt="Sarthak Chauhan" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Sarthak Chauhan">
            Sarthak Chauhan
          </h1>

          <p className="title">MERN Stack Developer</p>
          <a
            href="mailto:thesarthakchauhan@gmail.com"
            className="text-white text-sm mt-3 lg:hidden"
          >
            thesarthakchauhan@gmail.com
          </a>
        </div>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          {/* mail */}
          <li className="contact-item">
            <div className="icon-box">
              <IoMailOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:thesarthakchauhan@gmail.com" className="contact-link">
                thesarthakchauhan@gmail.com
              </a>
            </div>
          </li>

          {/* Github */}
          <li className="contact-item">
            <div className="icon-box">
              <IoLogoGithub />
            </div>

            <div className="contact-info">
              <p className="contact-title">Github</p>
              <a href="https://github.com/sarthakology" className="contact-link">
                sarthakology
              </a>
            </div>
          </li>

          {/* Resume */}
          <li className="contact-item">
            <div className="icon-box">
              <IoDocumentTextOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Resume</p>
              <a
                href="https://drive.usercontent.google.com/download?id=1njzDUeuG2vzFxxzroIERCtudiiBTbVix&export=download&authuser=0"  // Add your resume link here
                className="contact-link"
                download="Sarthak_Chauhan_Resume"
              >
                Download Resume
              </a>
            </div>
          </li>

          {/* Location */}
          <li className="contact-item">
            <div className="icon-box">
              <IoLocationOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Gurugram, Haryana, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        {/* Social Links */}
        <ul className="social-list">
          <li className="social-item">
            <a href="https://www.linkedin.com/in/sarthakch/" className="social-link">
              <IoLogoLinkedin />
            </a>
          </li>

          <li className="social-item">
            <a href="https://github.com/sarthakology" className="social-link">
              <IoLogoGithub />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
