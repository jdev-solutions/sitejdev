import { useState } from 'react';
import jdevlogo from '../../../public/logo-principal.svg';
import './styles.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo-link">
          <img src={jdevlogo} className="logo" alt="JDev Logo" />
        </a>
        <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#aboutUs">Sobre nós</a></li>
            <li><a href="#courses">Cursos</a></li>
            <li><a href="#commitment">Compromisso</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <a href="https://wa.me/5511947647670?text=Olá!%20Quero%20fazer%20um%20orçamento!" target="_blank">
          <button className="contact-btn">Entre em contato</button>
        </a>
      </div>
    </header>
  );
}

export default Header;