import './App.css'
import Header from './componentes/Header'
import Carrossel from './componentes/Carrossel'
import Servicos from './componentes/Servicos'
import SobreNos from './componentes/SobreNos'
import Cursos from './componentes/Cursos'
import Compromisso from './componentes/Compromisso'
import Pilares from './componentes/Pilares'
import Contato from './componentes/Contato'
import Footer from './componentes/Footer'
import { BarraAzul } from './componentes/BarraAzul'

function App() {

  return (
    <>
      <Header />
      <Carrossel />
      <Servicos />
      <SobreNos />
      <Cursos />
      <Compromisso />
      <Pilares />
      <Contato />
      <BarraAzul />
      <Footer />
    </>
  )
}

export default App
