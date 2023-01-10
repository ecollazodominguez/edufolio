import "./InfoContact.css";

export const InfoContact = () => {
  return (
    <section className="info">
      <h2>Contacto</h2>
      <p>Si estás interesado aquí te dejo cómo contactarme.</p>
      <article className="contact-phone">
        <h4>Teléfono</h4>
        <p>692321415</p>
      </article>
      <article className="contact-email">
        <h4>Email</h4>
        <a href="mailto:email@gemail.com">email@gemail.com</a>
      </article>
      <article className="contact-follow">
        <h4>LinkedIn</h4>
        <a href="https://www.linkedin.com/in/eduardo-collazo-a67b731b7/">
          LinkedIn
        </a>
      </article>
    </section>
  );
};
