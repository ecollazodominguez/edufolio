import { About } from "../components/About";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <main className="main-home">
      <Navbar />
      <About />
      <hr />
      <Footer />
    </main>
  );
};
