// import { projects } from "../data";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProjectList } from "../components/ProjectList";

const projects = require("../data/projects.json");

export const Projects = () => {
  return (
    <main className="main-projects">
      <Navbar />
      <img
        src={require("../assets/github-icon.png")}
        alt="github icon"
        onClick={() =>
          (window.location.href = "https://github.com/ecollazodominguez")
        }
      ></img>
      <ProjectList projects={projects} />
      <hr />
      <Footer />
    </main>
  );
};
