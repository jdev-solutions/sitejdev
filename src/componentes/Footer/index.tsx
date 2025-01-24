import './styles.css';
import jdevlogo from '../../../public/logo-principal.svg';
import email from '../../assets/email.png';
import whats from '../../assets/whats.png';
import insta from '../../assets/insta.png';
import loc from '../../assets/loc.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="/" className="logo-link">
            <img src={jdevlogo} className="logo" alt="JDev Logo" />
          </a>
        </div>
        <div className="footer-contact">
          <p> <a href="https://gmail.com" target="_blank" className="logo-link"><img src={email} className="iconcontact" alt="e-mail" /></a> contato.jdevsolutions@gmail.com</p>
          <p> <a href="https://wa.me/5511947647670?text=Olá!%20Quero%20fazer%20um%20orçamento!"target="_blank"className="logo-link"><img src={whats} className="iconcontact" alt="whats" /></a> +55 11 94764-7670</p>
          <p> <a href="https://www.instagram.com/jdevco/" target="_blank" className="logo-link"><img src={insta} className="iconcontact" alt="instagram" /></a> @jdevco</p>
          <p> <a href="https://www.google.com.br/maps/" target="_blank" className="logo-link"><img src={loc} className="iconcontact" alt="endereço" /></a> Avenida Professor José Manoel Pedroso, 1652 / sala 11</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 JDev Solutions. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;