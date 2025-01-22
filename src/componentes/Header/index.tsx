import React from 'react';
import jdevlogo from '../../../public/logo-principal.svg';
import './styles.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo-link">
          <img src={jdevlogo} className="logo" alt="JDev Logo" />
        </a>
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#services">Serviços</a></li>
            <li><a href="#about-us">Sobre nós</a></li>
            <li><a href="#courses">Cursos</a></li>
            <li><a href="#commitment">Compromisso</a></li>
            <li><a href="#contact">Contato</a></li>
            <li><a href="#faq">Dúvidas</a></li>
          </ul>
        </nav>
        <button className="contact-btn">Entre em contato</button>
      </div>
    </header>
  );
}

export default Header;