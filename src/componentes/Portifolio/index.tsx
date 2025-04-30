
import './styles.css';
import img10 from '../../assets/portifolio print.png';



function Portifolio() {
  return (
    <header className="main-sb" id='portfolio'>
        <h2 className='pt-subtitle'>Conheça nosso portifólio</h2>
      <div className="box-pt">
        <div className='img-box-pt'>
          <img src={img10} alt="imagem de um mouse" />
        </div>
      </div>
      <h2 className='port-h2'>Quer ver na prática o que a JDev Solutions pode fazer pelo seu negócio?</h2>
      <p className='pt'> 
      Clique no botão abaixo e confira nosso portfólio com sites,  landing pages e projetos incríveis que já desenvolvemos!
      </p>
      <a href="https://portifoliojdevsolutions.netlify.app" target="_blank">
          <button className="contact-btn-port">Ver Portifólio</button>
        </a>
    </header>
  );
}

export default Portifolio;