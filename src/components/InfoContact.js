import "./InfoContact.css";

export const InfoContact = ({ language }) => {
  return (
    <section className="info">
      {language === "ES" ? (
        <>
          <h2>Contacto</h2>
          <p>Si estás interesado aquí te dejo cómo contactarme.</p>
        </>
      ) : (
        <>
          <h2>Contact</h2>
          <p>If you are interested these are my contact info.</p>
        </>
      )}

      <article className="contact-phone">
        <h4>{language === "ES" ? "Teléfono" : "Phone"}</h4>
        <p>692321415</p>
      </article>
      <article className="contact-email">
        <h4>Email</h4>
        <a href="mailto:ecollazodominguez@gmail.com">
          ecollazodominguez@gmail.com
        </a>
      </article>
      <article className="contact-follow">
        <h4>LinkedIn</h4>
        <img
          src={require("../assets/linkedin-icon.webp")}
          alt="linkedin icon"
          onClick={() =>
            (window.location.href =
              "https://www.linkedin.com/in/eduardo-collazo-a67b731b7/")
          }
        />
      </article>
    </section>
  );
};
