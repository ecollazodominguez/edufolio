import "./SkillsSection.css";

export const SkillsSection = ({ title, content }) => {
  return (
    <section className="skills">
      <h3>{title}</h3>
      <ul className="skills-content">
        {content.map((data) => {
          return (
            <li className="skills-content" key={data.skill}>
              {data.skill}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
