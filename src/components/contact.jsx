import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  function handleForm(e) {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", msg);
  }

  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form
          className="form"
          onSubmit={handleForm}
          data-form
        >
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              data-form-input
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-form-input
            />
          </div>

          <textarea
            name="message"
            rows="15"
            className="form-input"
            placeholder="Your Message"
            required
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            data-form-input
          ></textarea>

          <button
            className="form-btn"
            type="submit"
            disabled={msg === "" && email === ""}
            data-form-btn
          >
            Send Message
          </button>
        </form>

        <section className="mapbox mt-6" data-mapbox>
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112284.47952060141!2d76.90768012175431!3d28.422576296950066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1742882271476!5m2!1sen!2sin"
              width="400"
              height="300"
              loading="lazy"
              title="location"
            ></iframe>
          </figure>
        </section>
      </section>
    </article>
  );
}
