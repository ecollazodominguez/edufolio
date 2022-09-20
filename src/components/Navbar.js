import "./Navbar.css";

export const Navbar = () => {
  return (
    <header className="index">
      <button className="header-about">Eduardo Collazo</button>
      <nav className="header-nav">
        <button className="header-cv">Currículum</button>
        <button className="header-project">Proyectos</button>
        <button className="header-contact">Contacto</button>
      </nav>
    </header>
  );
};
