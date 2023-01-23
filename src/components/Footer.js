import "./Footer.css";

export const Footer = ({ language }) => {
  return (
    <footer className="index">
      <article className="footer-phone">
        <h4>{language === "ES" ? "Teléfono" : "Phone"}</h4>
        <p>692321415</p>
      </article>
      <article className="footer-email">
        <h4>Gmail</h4>
        <a href="mailto:ecollazodominguez@gmail.com">ecollazodominguez</a>
      </article>
      <article className="footer-follow">
        <h4>{language === "ES" ? "Sígueme" : "Follow"}</h4>
        <img
          src={require("../assets/linkedin-icon.webp")}
          alt="linkedin icon"
          onClick={() =>
            (window.location.href =
              "https://www.linkedin.com/in/eduardo-collazo-a67b731b7/")
          }
        />
      </article>
    </footer>
  );
};
