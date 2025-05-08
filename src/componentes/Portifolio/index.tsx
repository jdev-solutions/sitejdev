import './styles.css';
import img10 from '../../assets/portifolio print.png';
import { motion } from 'framer-motion';

function Portifolio() {
  return (
    <section className="main-pt" id="portfolio">
      <motion.h2
        className="pt-subtitle"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Conheça o nosso portifólio
      </motion.h2>

      <motion.div
        className="box-pt"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="img-box-pt"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src={img10} alt="Projeto desenvolvido" />
        </motion.div>
      </motion.div>

      <motion.h2
        className="port-h2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Quer ver na prática o que a JDev Solutions pode fazer pelo seu negócio?
      </motion.h2>

      <motion.p
        className="pt"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Clique no botão abaixo e confira nosso portfólio com sites, landing pages e projetos incríveis que já desenvolvemos!
      </motion.p>

      <motion.a
        href="https://portifoliojdevsolutions.netlify.app"
        target="_blank"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <button className="contact-btn-port">Ver Portifólio</button>
      </motion.a>
    </section>
  );
}

export default Portifolio;