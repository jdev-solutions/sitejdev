import { useEffect, useState } from "react";
import whats_logo from "../../assets/WhatsApp.png";
import contact from "../../assets/chat.png";
import "./styles.css";

export function BarraAzul() {
    const [showBar, setShowBar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowBar(true);
            } else {
                setShowBar(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {showBar && (
                <a href="https://wa.me/5511947647670?text=Olá!%20Quero%20fazer%20um%20orçamento!" target="_blank" rel="noopener noreferrer">
                    <div className="fundoAzul">
                        <p className="textoBarraAzul">
                            <img src={contact} className="chatIcon" alt="contato icone" />
                            Entre em Contato
                        </p>
                        <a href="https://wa.me/5511947647670?text=Olá!%20Quero%20fazer%20um%20orçamento!" target="_blank" rel="noopener noreferrer">
                            <img src={whats_logo} className="whatsLogo" alt="Logo do Whats, entre em contato" />
                        </a>
                    </div>
                </a>
            )}
        </>
    );
}