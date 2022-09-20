import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="index">
      <article className="footer-phone">
        <h4>Teléfono</h4>
        <p>692321415</p>
      </article>
      <article className="footer-email">
        <h4>Email</h4>
        <p>email@gemail.com</p>
      </article>
      <article className="footer-follow">
        <h4>Sígueme</h4>
        <button>LinkedIn</button>
      </article>
    </footer>
  );
};
