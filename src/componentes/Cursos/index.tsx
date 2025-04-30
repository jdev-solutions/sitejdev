
import './styles.css';
import toools from '../../assets/tools 2.png'
import amp from '../../assets/hourglass 2.png'

function Cursos() {
  return (
    <header className="main-cursos" id='courses'>
        <h2 className='subtitle-cursos'>Cursos</h2>
        <div className="cursos-box">
          <img src={toools} className='tols' alt="Icone de ferramenta" />
          <p className='cursos-p'>Em Breve</p>
          <img id='amp' src={amp} alt="Icone de ampulheta" />
        </div>
    </header>
  );
}

export default Cursos;