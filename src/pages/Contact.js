import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import error from "../img/error.gif";
import check from "../img/check.gif";

function Contact() {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

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
          setIsSuccess(true); // Set a state variable to indicate success
          setErrorMessage(""); // Clear any previous error messages
          form.current.reset(); // Reset the form to clear the inputs
        },
        (error) => {
          console.log(error.text);
          setIsSuccess(false);
          setErrorMessage("Failed to send email. Please try again."); // Set the error message
        }
      );
  };

  return (
    <main id="contact">
      <h1>Contact</h1>
      {isSuccess === true && (
        <div className="success flex align-center justify-center">
          <div className="content flex column align-center justify-center">
            <button
              onClick={() => {
                setIsSuccess(null);
              }}
            >
              ╳
            </button>
            <img src={check} alt="Success" />
            <p>Email Sent Successfully!</p>
          </div>
        </div>
      )}
      {isSuccess === false && (
        <div className="error flex align-center justify-center">
          <div className="content flex column align-center justify-center">
            <button
              onClick={() => {
                setIsSuccess(null);
              }}
            >
              ╳
            </button>
            <img src={error} alt="Error" />
            <p>{errorMessage}</p>
          </div>
        </div>
      )}
      <form ref={form} onSubmit={sendEmail}>
        <div className="g-af">
          <input name="name" type="text" placeholder="Your Name" required j/>
          <input name="email" type="email" placeholder="Your Email" required j/>
        </div>
        <input type="text" name="subject" placeholder="Subject" required j/>
        <textarea name="message" placeholder="Your Message" requiredj></textarea>
        <button className="button button-primary">Send</button>
      </form>
    </main>
  );
}

export default Contact;
