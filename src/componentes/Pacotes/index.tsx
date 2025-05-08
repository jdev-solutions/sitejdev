
import './styles.css';
import cheak from '../../assets/check-mark (1) 3.png'
import close from '../../assets/close 5.png'
import tools from '../../assets/wrench 1.png'
import { motion } from 'framer-motion';

function Pacotes() {
  return (
    <header className="compro-pacote" id='packages'>
      <div className="box-pacote">
        <h2>Pacotes oferecidos</h2>
          <h3 className='subtitle'>Criação de sites</h3>
        <div className='img-box-compro-pacote img-div'>

          <div className='pacote-div'>
            <h4>Plano Inicial</h4>
            <li>
                <img src={cheak} alt="ícone de confirmado" />
                <span>Criação de Site completo + de 1 página </span>
            </li>
            <li>
                <img src={close} alt="ícone de x" />
                <span>Interações (Formulários, Carrosel, Sessão de login) </span>
            </li>
            <li>
                <img src={cheak} alt="ícone de confirmado" />
                <span>Manutenção e suporte durante 10 dias </span>
            </li>
            <li>
                <img src={tools} alt="ícone de ferramenta" />
                <span>Acompanhamento <strong> opcional </strong>mensal + R$ 699,99 </span>
            </li>

            <div className='pacote-footer'>
            <p> R$ 2.499,99</p>
            </div>
          </div>    

          
          <div className='pacote-div'>
            <h4>Plano Pro</h4>
            <li>
                <img src={cheak} alt="ícone de confirmado" />
                <span>Criação de Site completo + de 1 página </span>
            </li>
            <li>
                <img src={cheak} alt="ícone de confirmado" />
                <span>Interações (Formulários, Carrosel, Sessão de login) </span>
            </li>
            <li>
                <img src={cheak} alt="ícone de confirmado" />
                <span>Manutenção e suporte durante 30 dias </span>
            </li>
            <li>
                <img src={tools} alt="ícone de ferramenta" />
                <span>Acompanhamento <strong>opcional</strong> mensal + R$ 799,99 </span>
            </li>

            <div className='pacote-footer'>
            <p> R$ 3.499,99</p>
            </div>
          </div>
        </div>
        

            <h3 className='subtitle'>Criação de Landing pages</h3>
            <div className='img-box-compro-pacote img-div'>
                <div className='pacote-div'>
                    <h4>Plano Inicial</h4>
                    <li>
                        <img src={cheak} alt="ícone de confirmado" />
                        <span>Criação de Landing page com até 10 sessões  </span>
                    </li>
                    <li>
                        <img src={cheak} alt="ícone de confirmado" />
                        <span>Performance padrão </span>
                    </li>
                    <li>
                        <img src={cheak} alt="ícone de confirmado"/>
                        <span>Manutenção e suporte durante 10 dias </span>
                    </li>
                    <li>
                        <img src={tools} alt="ícone de ferramenta" />
                        <span>Acompanhamento <strong>opcional</strong> mensal + R$ 699,99 </span>
                    </li>
                    
                    <div className='pacote-footer'>
                        <p> R$ 1.499,99</p>
                    </div>
                </div>

                <div className='pacote-div'>
                    <h4>Plano Pro</h4>
                    <li>
                        <img src={cheak} alt="ícone de confirmado" />
                        <span>Criação de Landing page com mais de 10 sessões  </span>
                    </li>
                    <li>
                        <img src={cheak} alt="ícone de confirmado" />
                        <span>Performance alta </span>
                    </li>
                    <li>
                        <img src={cheak} alt="ícone de confirmado"/>
                        <span>Manutenção e suporte durante 30 dias </span>
                    </li>
                    <li>
                        <img src={tools} alt="ícone de ferramenta" />
                        <span>Acompanhamento <strong>opcional</strong> mensal + R$ 799,99 </span>
                    </li>   
                    <div className='pacote-footer'>
                        <p> R$ 1.999,99</p>
                    </div>
                </div>
            </div>

            <h3 className='subtitle'>Criação de identidade visual</h3>
            <div className='img-box-compro-pacote img-div'>
                <div className='pacote-div'>
                    <h4>Plano Logo</h4>
                    <li>
                        <img src={cheak} alt="ícone de confirmado" />
                        <span>Criação de Logotipo </span>
                    </li>
                    <li>
                        <img src={close} alt="ícone de confirmado" />
                        <span>15 Modelos de post </span>
                    </li>
                    <li>
                        <img src={close} alt="ícone de confirmado"/>
                        <span>Manutenção e suporte </span>
                    </li>
                    
                    <div className='pacote-footer'>
                    <p> R$ 499,99</p>
                    </div>
                </div>
                <div className='pacote-div'>
                    <h4>Plano Design de Post</h4>
                    <li>
                        <img src={cheak} alt="ícone de confirmado" />
                        <span>Criação de Logotipo  </span>
                    </li>
                    <li>
                        <img src={cheak} alt="ícone de confirmado" />
                        <span>15 Modelos de post </span>
                    </li>
                    <li>
                        <img src={close} alt="ícone de confirmado"/>
                        <span>Manutenção e suporte </span>
                    </li>
                    
                    <div className='pacote-footer'>
                    <p> R$ 799,99</p>
                    </div>
                </div>  

                    <div className='pacote-div '>
                    <h4>Plano Completo</h4>
                    <li>
                        <img src={cheak} alt="ícone de confirmado" />
                        <span>Criação de Logotipo  </span>
                    </li>
                    <li>
                        <img src={cheak} alt="ícone de confirmado" />
                        <span>15 modelos de post </span>
                    </li>
                    <li>
                        <img src={cheak} alt="ícone de confirmado"/>
                        <span>Manutenção e suporte </span>
                    </li>
                    
                    <div className='pacote-footer'>
                    <p> R$ 999,99</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="compro-div">
          <p>Na JDev Solutions, entendemos que cada empresa tem necessidades únicas. Por isso, além dos pacotes oferecidos, também fazemos serviços personalizados, criando soluções sob medida para o seu projeto.
          <br /> <br /> Clique no botão abaixo para conhecer todos os nossos pacotes e descobrir como podemos ajudar o seu negócio a se destacar no digital!</p>
        </div>


        <motion.a
            href="https://www.figma.com/design/QChtMjrnVVwj54lrNi5ExS/JDev-Solutions?node-id=1509-2&p=f&t=eYN1foIuyPImtfS2-0"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <button className="contact-btn-port">Todos os pacotes</button>
          </motion.a>

    </header>
  );
}

export default Pacotes