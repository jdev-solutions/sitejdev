
import './styles.css';

function Contato() {
  return (
    <header className="main-contato" id='contact'>
        <h2 className='subtitle-contato'>Faça um orçamento sem compromisso!</h2>
      <form action="contato-form">
        <div className="contato-box">
          <div className="input-box-1">
            <div className="input-div">
              <label htmlFor="name"> Nome</label>
              <input type="text" id='name' name='name'/>
            </div>
            <div className="input-div">
              <label htmlFor="phone">Telefone</label>
              <input type="text" id='phone' name='phone'/>
            </div>
          </div>
          <br />
          <div className="input-box-2">
            <div className="input-div">
            <label htmlFor="message">O que você precisa?</label>
            <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit" className="send-button">Enviar</button>
          </div>
      </div>
    </form>
    </header>
  );
}

export default Contato;