 import './styles.css';
 import { useState } from "react";

import imgCarr from '../../assets/imagem1carrossel1.png';
import img2Carr from '../../assets/imagem3carrossel3.png';
import img3Carr from '../../assets/imagem2carrossel2.png';

const images = [
  imgCarr,
  img3Carr,
  img2Carr
];

function Carrossel() {

   const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel-container"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <div
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
            key={index}
          >
            <img className="teste" src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-btn prev" onClick={handlePrev}>
        &lt;
      </button>
      <button className="carousel-btn next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carrossel;