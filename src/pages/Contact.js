import { Footer } from "../components/Footer";
import { FormContact } from "../components/FormContact";
import { InfoContact } from "../components/InfoContact";
import { Navbar } from "../components/Navbar";

import "./Contact.css";

export const Contact = () => {
  return (
    <main className="main-contact">
      <Navbar />
      <section className="section-contact">
        <InfoContact />
        <FormContact />
      </section>
      <hr />
      <Footer />
    </main>
  );
};
