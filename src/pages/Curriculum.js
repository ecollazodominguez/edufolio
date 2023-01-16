import { ExperienceSection } from "../components/ExperienceSection";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SkillsSection } from "../components/SkillsSection";

export const Curriculum = () => {
  const testData = [
    {
      date: "2020 - Presente",
      title: "Editora",
      desc: "Párrafo. Haz clic aquí para agregar tu propio texto y edita",
    },
    {
      date: "2018 - 2020",
      title: "Editora",
      desc: "lorem ipsum olresakmkasdjglas dsajgkas ladjngsdk sgks kahgjddlda adlf ldfhjdflh ldhj adlf",
    },
  ];

  const testData2 = [
    {
      date: "2015 - 2017",
      title: "Nombre de la institución | Título de maestría",
      desc: "Párrafo. Haz clic aquí para agregar tu propio texto y edita",
    },
    {
      date: "2012 - 2015",
      title: "Nombre de la institución | Título de licenciatura",
      desc: "lorem ipsum olresakmkasdjglas dsajgkas ladjngsdk sgks kahgjddlda adlf ldfhjdflh ldhj adlf",
    },
  ];

  const testData3 = [
    { skill: "Párrafo. Haz clic aquí para agregar tu propio texto y editar." },
    { skill: "Párrafo. Haz clic aquí para agregar tu propio texto y editar." },
    { skill: "Párrafo. Haz clic aquí para agregar tu propio texto y editar." },
  ];

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
