import { ExperienceSection } from "../components/ExperienceSection";
import { Footer } from "../components/Footer";
import { LanguageButton } from "../components/LanguageButton";
import { Navbar } from "../components/Navbar";
import { SkillsSection } from "../components/SkillsSection";

export const Curriculum = ({ language, setLanguage }) => {
  let jobData;
  let EducationData;
  let skillsData;

  if (language === "ES") {
    jobData = require("../data/ES/curriculumData/jobExperience_ES.json");
    EducationData = require("../data/ES/curriculumData/education_ES.json");
    skillsData = require("../data/ES/curriculumData/skills_ES.json");
  } else {
    jobData = require("../data/EN/curriculumData/jobExperience_EN.json");
    EducationData = require("../data/EN/curriculumData/education_EN.json");
    skillsData = require("../data/EN/curriculumData/skills_EN.json");
  }

  return (
    <main className="main-curriculum">
      <Navbar language={language} />
      <LanguageButton language={language} setLanguage={setLanguage} />
      <h2>Curriculum</h2>
      <ExperienceSection
        title={
          language === "ES" ? "Experiencia laboral" : "Professional Experience"
        }
        content={jobData}
      />
      <hr />
      <ExperienceSection
        title={language === "ES" ? "Educación" : "Education"}
        content={EducationData}
      />
      <hr />
      <SkillsSection
        title={language === "ES" ? "Habilidades" : "Skills"}
        content={skillsData}
      />
      <hr />
      <Footer />
    </main>
  );
};
