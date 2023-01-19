import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export const Navbar = ({ language }) => {
  const navigate = useNavigate();
  return (
    <header className="index">
      <button className="header-about" onClick={() => navigate("/")}>
        Eduardo Collazo
      </button>

      <nav className="header-nav">
        <button className="header-cv" onClick={() => navigate("/curriculum")}>
          {language == "ES" ? "Currículum" : "Curriculum"}
        </button>
        <svg id="verticalLine">
          <line x1="0" y1="25" x2="0" y2="50"></line>
        </svg>
        <button
          className="header-project"
          onClick={() => navigate("/projects")}
        >
          {language == "ES" ? "Proyectos" : "Projects"}
        </button>
        <svg id="verticalLine">
          <line x1="0" y1="25" x2="0" y2="50"></line>
        </svg>
        <button className="header-contact" onClick={() => navigate("/contact")}>
          {language == "ES" ? "Contactos" : "Contact"}
        </button>
      </nav>
    </header>
  );
};
