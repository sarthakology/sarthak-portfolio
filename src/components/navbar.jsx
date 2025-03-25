import React, { useState } from "react";

export default function Navbar({ setNavlink }) {
  const [linkActive, setLinkActive] = useState("about");

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button
            className={
              linkActive === "about" ? `navbar-link active` : "navbar-link"
            }
            // data-nav-link
            onClick={() => {
              setNavlink("about");
              setLinkActive("about");
            }}
          >
            Home
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={
              linkActive === "resume" ? `navbar-link active` : "navbar-link"
            }
            // data-nav-link
            onClick={() => {
              setNavlink("resume");
              setLinkActive("resume");
            }}
          >
            About
          </button>
        </li>

        <li className="navbar-item ">
          <button
            className={
              linkActive === "projects" ? `navbar-link active` : "navbar-link"
            }
            data-nav-link
            onClick={() => {
              setNavlink("projects");
              setLinkActive("projects");
            }}
          >
            Projects
          </button>
        </li>


        <li className="navbar-item">
          <button
            className={
              linkActive === "contact" ? `navbar-link active` : "navbar-link"
            }
            data-nav-link
            onClick={() => {
              setNavlink("contact");
              setLinkActive("contact");
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
