
import './styles.css';
import img1 from '../../assets/pexels-fauxels-3183197 1.png';
import img2 from '../../assets/pexels-mohammad-danish-290641-891059 1.png';
import img3 from '../../assets/pexels-vojtech-okenka-127162-392018 1.png';


function SobreNos() {
  return (
    <header className="main-sb">
        <h2>Quem somos nós</h2>
        <h3>Conheça a JDev</h3>
      <div className="box-sb">
        <div className='img-box'>
          <img src={img3} alt="imagem de um mouse" />
          <p>Tecnologia</p>
        </div>
        <div className='img-box'>
          <img src={img1} alt="imagem de uma mesa de reunião" />
          <p>Criatividade</p>
        </div>
        <div className='img-box'>
          <img src={img2} alt="imagem de uma caneta" />
          <p>Profissionalismo</p>
          </div>
      </div>
      <p className='sb'> 
        A JDev Solutions é uma empresa especializada na criação de sites modernos, desenvolvimento de landing pages atraentes e na venda de cursos completos de programação, do básico ao avançado.
      </p>
    </header>
  );
}

export default SobreNos;