import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Curriculum } from "./pages/Curriculum";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { useEffect, useState } from "react";

function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") ? localStorage.getItem("language") : "ES"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const GoUpWhenChangeLocation = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home language={language} setLanguage={setLanguage} />}
        />
        <Route
          path="/curriculum"
          element={<Curriculum language={language} setLanguage={setLanguage} />}
        />
        <Route
          path="/projects"
          element={<Projects language={language} setLanguage={setLanguage} />}
        />
        <Route
          path="/contact"
          element={<Contact language={language} setLanguage={setLanguage} />}
        />
        <Route
          path="/*"
          element={<Home language={language} setLanguage={setLanguage} />}
        />
      </Routes>
      <GoUpWhenChangeLocation />
    </>
  );
}

export default App;
