 import './styles.css';
 import { useEffect, useState } from "react";

import imgCarr from '../../assets/imgcarr1.png';
import img2Carr from '../../assets/imgcarr3.png';
import img3Carr from '../../assets/imagem2carrossel2.png';

import imgCarrRespons from '../../assets/imgcarr1respo.png';
import img2CarrRespons from '../../assets/img2.png';
import img3CarrRespons from '../../assets/imgcarr3respo.png';

import img1tv from '../../assets/img1tv.png';
import img2tv from '../../assets/img2tv.png';
import img3tv from '../../assets/img3tv.png';

const images = [
  imgCarr,
  img3Carr,
  img2Carr
];

const imagesRespons = [
  imgCarrRespons,
  img2CarrRespons,
  img3CarrRespons
];

const imagesResponsTv = [
  img1tv,
  img2tv,
  img3tv
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

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Tempo entre as transições (em milissegundos)

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

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
      <div
        className="carousel-containerRespo"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {imagesRespons.map((src, index) => (
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
      <div
        className="carousel-container-tv"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {imagesResponsTv.map((src, index) => (
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