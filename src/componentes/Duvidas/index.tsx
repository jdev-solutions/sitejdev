import './styles.css';
import { useState } from 'react';
import mais from '../../assets/plus1.png';
import menos from '../../assets/minus1.png';

const duvidas = [
  {
    pergunta: 'Qual a diferença entre um site e uma landing page?',
    resposta:
      'Um site contém várias páginas e informações sobre a empresa, produtos e serviços. Já uma landing page é uma página única e objetiva, criada para conversões específicas, como captar leads ou vender um produto.',
  },
  {
    pergunta: 'Vocês oferecem suporte após a entrega?',
    resposta:
      'Sim! Dependendo do projeto, oferecemos suporte por um período determinado e temos opções de manutenção contínua.',
  },
  {
    pergunta: 'O site será responsivo?',
    resposta:
      'Sim, todos os nossos sites são responsivos e otimizados para funcionar perfeitamente em dispositivos móveis, tablets e desktops.',
  },
  {
    pergunta: 'Quanto tempo leva para desenvolver um site?',
    resposta:
      'O prazo depende do projeto. Em média, sites institucionais levam de 7 a 10 dias, enquanto e-commerces e sistemas podem levar mais tempo conforme a complexidade.',
  },
  {
    pergunta: 'Como funciona o pagamento?',
    resposta:
      'Aceitamos pagamentos via Pix, boleto e cartão de crédito. O pagamento pode ser parcelado conforme o tipo de serviço.',
  },
  {
    pergunta: 'Vocês trabalham apenas com empresas?',
    resposta:
      'Atendemos empresas de todos os portes e profissionais autônomos que precisam de um site, identidade visual ou soluções digitais personalizadas.',
  },
];

function Duvidas() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="duvidas-container" id="commitment">
      <h2 className="h2-duv">Dúvidas frequentes</h2>
      <br />
      <div className="accordion">
        {duvidas.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className={`accordion-item ${isActive ? 'active' : ''}`}
              onClick={() => toggleIndex(index)}
            >
              <div className="accordion-title-container">
                <h3 className="accordion-title">
                  <img
                    className="iconPlus"
                    src={isActive ? menos : mais}
                    alt={isActive ? 'Fechar' : 'Abrir'}
                  />
                  {item.pergunta}
                </h3>
                <span className="hover-hint">Clique para abrir</span>
              </div>
              <div className="accordion-content">
                <p>{item.resposta}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Duvidas;