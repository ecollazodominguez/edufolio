import "./App.css";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <About />
      <hr />
      <Footer />
    </main>
  );
}

export default App;
