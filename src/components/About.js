import { useNavigate } from "react-router-dom";
import "./About.css";

export const About = () => {
  const navigate = useNavigate();
  return (
    <section className="about">
      <img src={require("../aboutpict.webp")} alt="foto"></img>
      <article className="about-text">
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
        <menu className="about-menu">
          <button className="about-cv" onClick={() => navigate("/curriculum")}>
            Currículum
          </button>
          <button
            className="about-project"
            onClick={() => navigate("/projects")}
          >
            Proyectos
          </button>
          <button
            className="about-contact"
            onClick={() => navigate("/contact")}
          >
            Contacto
          </button>
        </menu>
      </article>
    </section>
  );
};
