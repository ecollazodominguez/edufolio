import { useNavigate } from "react-router-dom";
import "./About.css";

export const About = ({ language }) => {
  return (
    <section className="about">
      <img src={require("../assets/homeimage.jpg")} alt="foto"></img>
      <article className="about-text">
        <Introduction language={language} />
        <MenuButton language={language} />
      </article>
    </section>
  );
};

const Introduction = ({ language }) => {
  return (
    <>
      {language == "ES" ? (
        <>
          <h2>Hola</h2>
          <h4>Un poco de mí</h4>
          <p>
            Soy un <b>desarrollador</b> tanto de <b>web</b> como de
            <b> aplicaciones</b>. He estudiado
            <b> lenguajes</b> como <b>Java, Python, JS</b> y <b>frameworks </b>
            como <b>node.JS</b> o <b>REACT</b>.
          </p>
          <br />
          <p>
            Soy una persona de
            <b> rápido aprendizaje, curiosa y amante de la programación</b>. Te
            animo a que veas mis <b>proyectos</b>.
          </p>
        </>
      ) : (
        <>
          <h2>Hello</h2>
          <h4>A little about me</h4>
          <p>
            I am a <b>web developer</b> and <b>app developer</b> too. I studied
            differents languages like <b>Java, Python, JS</b> and{" "}
            <b>frameworks </b>
            like <b>node.JS</b> or <b>REACT</b>.
          </p>
          <br />
          <p>
            I am a{" "}
            <b>
              fast learning person a curious one and a passionate about
              programming
            </b>
            . I encourage you to look to my <b>projects</b>
          </p>
        </>
      )}
    </>
  );
};

const MenuButton = ({ language }) => {
  const navigate = useNavigate();
  return (
    <menu className="about-menu">
      <button className="about-cv" onClick={() => navigate("/curriculum")}>
        {language == "ES" ? "Currículum" : "Curriculum"}
      </button>
      <button className="about-project" onClick={() => navigate("/projects")}>
        {language == "ES" ? "Proyectos" : "Projects"}
      </button>
      <button className="about-contact" onClick={() => navigate("/contact")}>
        {language == "ES" ? "Contactos" : "Contact"}
      </button>
    </menu>
  );
};
