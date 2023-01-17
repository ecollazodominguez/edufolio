import { ExperienceSection } from "../components/ExperienceSection";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SkillsSection } from "../components/SkillsSection";

export const Curriculum = () => {
  const testData = require("../data/curriculumData/jobExperience.json");

  const testData2 = require("../data/curriculumData/education.json");

  const testData3 = require("../data/curriculumData/skills.json");
  return (
    <main className="main-curriculum">
      <Navbar />
      <h2>Curriculum</h2>
      <ExperienceSection title="Experiencia laboral" content={testData} />
      <hr />
      <ExperienceSection title="Educación" content={testData2} />
      <hr />
      <SkillsSection title="Habilidades" content={testData3} />
      <hr />
      <Footer />
    </main>
  );
};
