import { useState } from 'react';
import './styles.css';

interface Testimonial {
  text: string;
  author: string;
}

const testimonialsData: Testimonial[] = [
  { text: 'Ta sensacional, parabéns pelo trabalho de vocês, Deus abençoe, super indico, ficou lindo!', author: 'Ana Beatriz (MidiaseuBiaana)' },
  { text: 'Contratei a JDev para criar um site profissional, o que eles me entregaram foi muito além do esperado, ficou incrível .', author: 'Henrique Urrutia (PeneiHr)' },
  { text: 'A JDev criou minha identidade visual do zero e desenvolveu uma landing page incrível. Meu público adorou o design moderno e profissional.', author: 'Elzimar Marinho (Elzi Roupas)' },
  { text: 'Precisava de um site profissional para o meu grupo de dança, e a JDev Solutions fez um trabalho impecável!', author: 'Eliane de Barros (Tempo de Luz)' },
  { text: 'A equipe da JDev Solutions superou todas as minhas expectativas. O site ficou moderno, rápido, funcional e com um design impecável.', author: 'Calixto Amaral (Calix Construtora)' },
  { text: 'Fiquei impressionado  com o cuidado nos detalhes e a atenção da JDev Solutions. Meu instagram ficou como eu queria, profissional e bonito!', author: 'Eduardo Sousa (Artes com Deus)' },
];

function Comentarios() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - itemsPerPage));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + itemsPerPage >= testimonialsData.length ? prev : prev + itemsPerPage));
  };

  const visibleTestimonials = testimonialsData.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="testimonials">
      <h2 className="title-card2">Depoimentos</h2>
      <br />
      <div className="container py-xl">
        <div className="testimonials-carousel">
          <div className="testimonials-viewport">
            <div className="testimonials-wrapper">
              {visibleTestimonials.map((testimonial, index) => (
                <div key={index} className="testimonial">
                  <p>"{testimonial.text}"</p>
                  <span className="span-depoimentos">- {testimonial.author}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
    </section>
  );
}

export default Comentarios;