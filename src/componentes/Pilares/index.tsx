
import './styles.css';
import exc from '../../assets/trophy 1.png'
import per from '../../assets/edit 1.png'
import tra from '../../assets/hand-shake 1.png'
import col from '../../assets/support (1) 1.png'
import emp from '../../assets/friends 1.png'
import ins from '../../assets/idea 1.png'



function Pilares() {
  return (
    <header className="main-pilares">
        <h2 className='subtitle-pilares'>Por que escolher a JDev Solutions?</h2>
      <div className="box-pilares">
        <div className="pilares-1">
            <li className='pil'>
              <img src={exc} alt="icon de trofeu" />
              <span>Excelência</span>
              <p>Entregar sempre o melhor, com atenção aos detalhes e foco nos resultados.</p>
            </li>
            <li className='pil'>
            <img src={per} alt="icon de caderno" />
              <span>Personalização</span>
              <p>Oferecer produtos e serviços adaptados às necessidades exclusivas de cada cliente.</p>
            </li>
            <li className='pil'>
            <img src={tra} alt="icon de mãos" />
              <span>Transparência</span>
              <p>Garantir clareza em todas as etapas dos projetos e nas comunicações com os clientes.</p>
            </li>
        </div>
        <div className='pilares-2'>
            <li className='pil'>
            <img src={col} alt="icon de mãos" />
              <span>Colaboração</span>
              <p>Estabelecer parcerias de confiança e transparência com nossos clientes</p>
            </li>
            <li className='pil'>
            <img src={emp} alt="icon de abraço" />
              <span>Empatia</span>
              <p>Compreender as dores e objetivos dos clientes para oferecer as melhores soluções.</p>
            </li>
            <li className='pil'>
            <img src={ins} alt="icon de lâmpada" />
              <span>Inspiração</span>
              <p>Ser uma referência de criatividade e impacto positivo no setor tecnológico.</p>
            </li>
            </div>
      </div>
    </header>
  );
}

export default Pilares;