 import './styles.css';
import Slider from '../commons/Slider/Slider'
import { SwiperProps, SwiperSlide } from 'swiper/react';

import img1 from '../../assets/imgfundo1.png';
import img2 from '../../assets/imgfundo2.png';
import img3 from '../../assets/imgfundo3.png';

function Carrossel() {
  const settings: SwiperProps = {
    spaceBetween: 50,
    loop: true,
    slidesPerView: 1,
    navigation: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
        clickable: true,
    }
  }
  
  return (
    <section className="carousel-section">
      <Slider settings={settings}>
        <SwiperSlide>
          <div className="slide" style={{ backgroundImage: `url(${img1})` }}>
            <h2>Bem-vindo à JDev Solutions</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide" style={{ backgroundImage: `url(${img2})` }}>
            <h2>Transformando ideias em realidade</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide" style={{ backgroundImage: `url(${img3})` }}>
            <h2>Sites, sistemas e aplicativos personalizados</h2>
          </div>
        </SwiperSlide>
      </Slider>
    </section>
  );
}

export default Carrossel;