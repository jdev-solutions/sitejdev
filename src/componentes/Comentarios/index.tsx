
import './styles.css';
import rique from  '../../assets/riquinho.png'
import bia from '../../assets/Group 21.png'
import elzi from '../../assets/Group 501 (1) 3.png'
import eli from '../../assets/Group 765.png'

function Comentarios() {
  return (
    <header className="compro-comen" id='commitment'>
        <h2 className='dep'>Depoimentos</h2>
      <div className="box-comen">
        <div className='img-box-compro-comen img-divv'>

          <div className='comen-div'>
            <div className="comen-header">
            <img src={eli} alt="foto da marca" />
                <div className="comen-header-div">
                    <h4>Grupo Tempo de Luz</h4>
                    <p className='sub-comen'> Criação de site institucional</p>
                </div>
            </div>
            <div className='comen-p'>
            <p>
            “Precisava de um site profissional para o meu grupo de dança, e a JDev Solutions fez um trabalho impecável! O site ficou rápido, bonito e funcional."
            </p>
            </div>

          </div>    

          
          <div className='comen-div'>
            <div className="comen-header">
            <img src={elzi} alt="foto da marca" />
                <div className="comen-header-div">
                    <h4>Elzi Roupas</h4>
                    <p className='sub-comen'> Criação de logo e site institucional</p>
                </div>
            </div>
            <div className='comen-p'>
            <p>
            “A JDev Solutions criou minha identidade visual do zero e desenvolveu uma landing page incrível. Meu público adorou o design moderno e profissional."
            </p>
            </div>

          </div>
        </div>
        

        <div className='img-box-compro-comen img-divv'>
        <div className='comen-div'>
            <div className="comen-header">
            <img src={rique} alt="foto da marca" />
                <div className="comen-header-div">
                    <h4>Penei Hr</h4>
                    <p className='sub-comen'> Criação de site institucional</p>
                </div>
            </div>
            <div className='comen-p'>
            <p>
            “Contratei a JDev Solutions para criar um site profissional, o que eles me entregaram foi muito além do esperado, ficou incrivel.”
            </p>
            </div>
        </div>
        


        <div className='comen-div'>
            <div className="comen-header">
            <img src={bia} alt="foto de marca" />
                <div className="comen-header-div">
                    <h4>MidiaseuBiaana</h4>
                    <p className='sub-comen'> Criação de logo e site institucional</p>
                </div>
            </div>
            <div className='comen-p'>
            <p>
            “Ta sensacional, parabens pelo trabalho de vocês, Deus abençoe, super indico, ficou lindo!”
            </p>
            </div>
        </div>
        </div>
      </div>
    </header>
  );
}

export default Comentarios