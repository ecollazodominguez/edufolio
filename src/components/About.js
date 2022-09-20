import "./About.css";

export const About = () => {
  return (
    <section className="about">
      <img src="" alt="foto"></img>
      <article className="about-text">
        <h2>Hola</h2>
        <h4>Un poco de mí</h4>
        <p>lorem ipsum</p>
        <menu className="about-menu">
          <button className="about-cv">Currículum</button>
          <button className="about-project">Proyectos</button>
          <button className="about-contact">Contacto</button>
        </menu>
      </article>
    </section>
  );
};
