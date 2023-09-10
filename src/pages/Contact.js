import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ery0cp8",
        "template_e6ej3qt",
        form.current,
        "wLhnusKVW2bFhZfIx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main id="contact">
      <h1>Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="g-af">
          <input name="name" type="text" placeholder="Your Name" />
          <input name="email" type="email" placeholder="Your Email" />
        </div>
        <input type="text" name="subject" placeholder="Subject" />
        <textarea name="message" placeholder="Your Message"></textarea>
        <button className="button button-primary">Send</button>
      </form>
    </main>
  );
}

export default Contact;
