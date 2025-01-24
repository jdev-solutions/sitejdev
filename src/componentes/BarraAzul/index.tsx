import whats_logo from "../../assets/WhatsApp.png";
import contact from '../../assets/chat.png';
import './styles.css';

export function BarraAzul () {
    return (
        <a href="https://wa.me/5511947647670?text=Olá!%20Quero%20fazer%20um%20orçamento!"target="_blank">
        <div className="fundoAzul">
            <p className="textoBarraAzul"><img src={contact} className="chatIcon" alt="contato icone" />Entre em Contato</p>
            <a href="https://wa.me/5511947647670?text=Olá!%20Quero%20fazer%20um%20orçamento!"target="_blank"><img src={whats_logo} className="whatsLogo" alt="Logo do Whats, entre emcontato" /></a>
        </div>
        </a>
    )
}