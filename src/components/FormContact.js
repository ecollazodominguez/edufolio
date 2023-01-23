import "./FormContact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export const FormContact = ({ language }) => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [error, setError] = useState();

  //We use EmailJS API to send the mail to myself
  const sendEmail = async (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    try {
      setIsSendingEmail(true);

      await emailjs.sendForm(
        "service_fmg8jae",
        "template_284npt8",
        form.current,
        "Zdyfn-Af_cgaZPmUu"
      );

      setIsEmailSent(true);
      setTimeout(() => {
        setIsEmailSent(false);
      }, 3000);
      setIsSendingEmail(false);
    } catch (error) {
      setError(error);
      if (language === "ES") {
        alert("Algo ha ido mal, inténtalo de nuevo más tarde.");
      } else {
        alert("Something went wrong. Try again later.");
      }
    }
  };

  return (
    <>
      {isEmailSent ? <Popup language={language} error={error} /> : null}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <fieldset className="fullname">
          <fieldset className="firstname">
            <label htmlFor="firstname">
              {language === "ES" ? "Nombre" : "First Name"}
            </label>
            <input type="name" id="firstname" name="firstname" />
          </fieldset>
          <fieldset className="lastname">
            <label htmlFor="lastname">
              {language === "ES" ? "Apellido" : "Last Name"}
            </label>
            <input type="name" id="lasttname" name="lastname" />
          </fieldset>
        </fieldset>
        <fieldset className="contact-data">
          <fieldset className="email">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required />
          </fieldset>
          <fieldset className="subject">
            <label htmlFor="subject">
              {language === "ES" ? "Asunto" : "Subject"}
            </label>
            <input type="name" id="subject" name="subject" />
          </fieldset>
        </fieldset>
        <fieldset className="content">
          <fieldset className="text">
            <label htmlFor="message">
              {language === "ES" ? "Mensaje" : "Message"}
            </label>
            <textarea id="message" name="message" />
          </fieldset>
          <button disabled={isSendingEmail}>
            {language === "ES" ? "Enviar" : "Send"}
          </button>
        </fieldset>
      </form>
    </>
  );
};

const Popup = ({ language, error }) => {
  return (
    <section className="popup">
      <article>
        {language === "ES" ? (
          error ? (
            <p>Algo ha ido mal, inténtalo de nuevo más tarde.</p>
          ) : (
            <p>El email ha sido enviado.</p>
          )
        ) : error ? (
          <p>Something went wrong. Try again later.</p>
        ) : (
          <p>Email sent.</p>
        )}
      </article>
    </section>
  );
};
