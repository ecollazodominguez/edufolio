import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="index">
      <button className="header-about" onClick={() => navigate("/")}>
        Eduardo Collazo
      </button>

      <nav className="header-nav">
        <button className="header-cv" onClick={() => navigate("/curriculum")}>
          Currículum
        </button>
        <svg id="verticalLine">
          <line x1="0" y1="60" x2="0" y2="90"></line>
        </svg>
        <button
          className="header-project"
          onClick={() => navigate("/projects")}
        >
          Proyectos
        </button>
        <svg id="verticalLine">
          <line x1="0" y1="60" x2="0" y2="90"></line>
        </svg>
        <button className="header-contact" onClick={() => navigate("/contact")}>
          Contacto
        </button>
      </nav>
    </header>
  );
};
