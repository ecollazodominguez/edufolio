import { About } from "../components/About";
import { Footer } from "../components/Footer";
import { LanguageButton } from "../components/LanguageButton";
import { Navbar } from "../components/Navbar";

export const Home = ({ language, setLanguage }) => {
  return (
    <main className="main-home">
      <Navbar language={language} />
      <LanguageButton language={language} setLanguage={setLanguage} />
      <About language={language} setLanguage={setLanguage} />
      <hr />
      <Footer language={language} />
    </main>
  );
};
