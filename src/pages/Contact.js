import React from "react";

function Contact() {
  return (
    <main id="contact">
      <h1>Contact</h1>
      <form>
        <div className="g-af">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
        </div>
        <textarea placeholder="Your Message"></textarea>
        <button className="button button-primary">Send</button>
      </form>
    </main>
  );
}

export default Contact;
