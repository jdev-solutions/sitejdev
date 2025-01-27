
import './styles.css';
import tools from '../../assets/tools 2.png'
import amp from '../../assets/hourglass 2.png'

function Cursos() {
  return (
    <header className="main-cursos" id='courses'>
        <h2 className='subtitle-cursos'>Cursos</h2>
        <h3 className='cursos-h3'>Do iniciante ao avançado, aprenda do 0 ao programador contratado.</h3>
        <div className="cursos-box">
          <img src={tools} alt="Icone de ferramenta" />
          <p className='cursos-p'>Em Breve</p>
          <img id='amp' src={amp} alt="Icone de ampulheta" />
        </div>
    </header>
  );
}

export default Cursos;