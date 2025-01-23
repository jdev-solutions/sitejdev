
import './styles.css';
import reu from '../../assets/DSC07036 1.png'
import boss from '../../assets/pexels-fauxels-3184291 1.png'



function Compromisso() {
  return (
    <header className="compro-main">
        <h2>Compromisso</h2>
        <h3>Ajudamos a crescer sua empresa</h3>
      <div className="box">
        <div className='img-box-compro'>
          <img src={boss} alt="imagem de uma reunião" />
          <p>Exclusividade</p>
        </div>
        <div className='img-box-compro'>
          <img src={reu} alt="imagem dos donos" />
          <p>Confiança</p>
        </div>
      </div>
      <p className='compro'> 
      Nosso objetivo é criar soluções digitais de alta qualidade, desenvolvendo sites, sistemas e aplicativos que atendam às necessidades de cada cliente. Transformamos ideias em produtos tecnológicos modernos e eficientes, garantindo a satisfação e o sucesso dos nossos parceiros.
      </p>
    </header>
  );
}

export default Compromisso;