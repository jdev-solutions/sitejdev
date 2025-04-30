
import './styles.css';



function Duvidas() {
  return (
      <header className="compro-main-duv" id='commitment'>
        <h2 className='h2-duv'>Dúvidas frequentes</h2>
      <div className="box-duv">
        <div className='img-box-duv inicial'>
            <h3 className='h3-duv'>Qual a diferença entre um site e uma landing page?</h3>
            <p>Um site contém várias páginas e informações sobre a empresa, produtos e serviços. Já uma landing page é uma página única e objetiva, criada para conversões específicas, como captar leads ou vender um produto.</p>
        </div>
        <div className='img-box-duv'>
            <h3 className='h3-duv'> Vocês oferecem suporte após a entrega?</h3>
            <p>Sim! Dependendo do projeto, oferecemos suporte por um período determinado e temos opções de manutenção contínua.</p>
        </div>
        <div className='img-box-duv'>
            <h3 className='h3-duv'>O site será responsivo?</h3>
            <p> Sim, todos os nossos sites são responsivos e otimizados para funcionar perfeitamente em dispositivos móveis, tablets e desktops.</p>
        </div>
        <div className='img-box-duv'>
            <h3 className='h3-duv'>Quanto tempo leva para desenvolver um site?</h3>
            <p>O prazo depende do projeto. Em média, sites institucionais levam de 7 a 10 dias, enquanto e-commerces e sistemas podem levar mais tempo conforme a complexidade</p>
        </div>
        <div className='img-box-duv'>
            <h3 className='h3-duv'>Como funciona o pagamento?</h3>
            <p>Aceitamos pagamentos via Pix, boleto e cartão de crédito. O pagamento pode ser parcelado conforme o tipo de serviço.</p>
        </div>
        <div className='img-box-duv final'>
            <h3 className='h3-duv'> Vocês trabalham apenas com empresas? </h3>
            <p>Atendemos empresas de todos os portes e profissionais autônomos que precisam de um site, identidade visual ou soluções digitais personalizadas</p>
        </div>
      </div>
    </header>
  );
}

export default Duvidas;