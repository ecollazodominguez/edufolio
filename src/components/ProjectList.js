//This archive has ProjectList, ProjectContent and ProjectText components.

import "./ProjectList.css";

export const ProjectList = ({ projects }) => {
  return (
    <section className="projects">
      <ul className="project-list">
        {projects.map((project) => (
          <ProjectContent
            key={project.image}
            link={project.link}
            image={require("../project-1.gif")} //change this later
            subtitle={project.subtitle}
            title={project.title}
            description={project.description}
          />
        ))}
      </ul>
    </section>
  );
};

const ProjectContent = ({ link, image, subtitle, title, description }) => {
  return (
    <li>
      <a href={link} key={image} className="project-link">
        <section className="project-content">
          <img alt="gallery" className="project-image" src={image} />
          <ProjecText
            subtitle={subtitle}
            title={title}
            description={description}
          />
        </section>
      </a>
    </li>
  );
};

const ProjecText = ({ subtitle, title, description }) => {
  return (
    <article className="project-text">
      <h2 className="project-subtitle">{subtitle}</h2>
      <h1 className="project-title">{title}</h1>
      <p className="project-description">{description}</p>
    </article>
  );
};
