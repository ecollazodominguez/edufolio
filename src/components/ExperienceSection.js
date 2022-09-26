import "./ExperienceSection.css";

export const ExperienceSection = ({ title, content }) => {
  return (
    <section className="experience">
      <h3>{title}</h3>
      <ul className="experience-content">
        {content.map((data) => {
          return (
            <li className="experience-content">
              <p>{data.date}</p>
              <article className="experience-description">
                <h4>{data.title}</h4>
                <p>{data.desc}</p>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
