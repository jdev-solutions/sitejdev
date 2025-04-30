
import './styles.css';
import comp from '../../assets/computer (3) 1.png'
import cpu from '../../assets/cpu 1.png'
import book from '../../assets/reading-book (1) 1.png'
import shop from '../../assets/shop (1) 1.png'
import sma from '../../assets/smartphone (1) 1.png'
import video from '../../assets/video (2) 1.png'

function Servicos() {
  return (
    <header className="main" id='services'>
        <h2 className='subtitle-serv'>Tudo para sua empresa</h2>
      <div className="box">
        <div className="servicos">
            <li className='serv'>
              <img src={comp} alt="icon de computador" />
              <span>Sites</span>
              <p>Criação e manutenção</p>
            </li>
            <li className='serv'>
            <img src={sma} alt="icon de celular" />
              <span>Aplicativos</span>
              <p>Criação e manutenção</p>
            </li>
            <li className='serv'>
            <img src={cpu} alt="icon de cpu" />
              <span>Sistemas</span>
              <p>Criação e manutenção</p>
            </li>
            <li className='serv'>
            <img src={shop} alt="icon de loja" />
              <span>Identidade <br /> visual</span>
              <p>Criação</p>
            </li>
            <li className='serv'>
            <img src={video} alt="icon de video" />
              <span>Cursos</span>
              <p>Aulas <br /> completas</p>
            </li>
            <li className='serv'>
            <img src={book} alt="icon de livro" />
              <span>Conteúdo <br /> gratuito</span>
              <p>video aulas</p>
            </li>
        </div>
      </div>
    </header>
  );
}

export default Servicos;