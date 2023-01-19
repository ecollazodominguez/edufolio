import { Footer } from "../components/Footer";
import { FormContact } from "../components/FormContact";
import { InfoContact } from "../components/InfoContact";
import { LanguageButton } from "../components/LanguageButton";
import { Navbar } from "../components/Navbar";

import "./Contact.css";

export const Contact = ({ language, setLanguage }) => {
  return (
    <main className="main-contact">
      <Navbar language={language} />
      <LanguageButton language={language} setLanguage={setLanguage} />
      <section className="section-contact">
        <InfoContact language={language} />
        <FormContact language={language} />
      </section>
      <hr />
      <Footer language={language} />
    </main>
  );
};
