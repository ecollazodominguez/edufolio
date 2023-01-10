import { useNavigate } from "react-router-dom";
import "./About.css";

export const About = () => {
  const navigate = useNavigate();
  return (
    <section className="about">
      <img src="" alt="foto"></img>
      <article className="about-text">
        <h2>Hola</h2>
        <h4>Un poco de mí</h4>
        <p>lorem ipsum</p>
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
