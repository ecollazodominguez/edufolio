// import { projects } from "../data";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProjectList } from "../components/ProjectList";
import { LanguageButton } from "../components/LanguageButton";

export const Projects = ({ language, setLanguage }) => {
  let projects;
  if (language == "ES") {
    projects = require("../data/ES/projects_ES.json");
  } else {
    projects = require("../data/EN/projects_EN.json");
  }

  return (
    <main className="main-projects">
      <Navbar language={language} />
      <LanguageButton language={language} setLanguage={setLanguage} />
      <img
        className="gitIcon"
        src={require("../assets/github-icon.png")}
        alt="github icon"
        onClick={() =>
          (window.location.href = "https://github.com/ecollazodominguez")
        }
      ></img>
      <ProjectList projects={projects} />
      <hr />
      <Footer language={language} />
    </main>
  );
};
