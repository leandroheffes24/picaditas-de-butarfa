import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'
import Galeria from './components/Galeria/galeria'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import NuestrasEspecialidades from './components/NuestrasEspecialidades/NuestrasEspecialidades'
import PreguntasFrecuentes from './components/PreguntasFrecuentes/PreguntasFrecuentes'
import Slider from './components/Slider/Slider'
import WhatsappFlotante from './components/WhatsappFlotante/WhatsappFlotante'

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Slider/>
      <NuestrasEspecialidades/>
      <Galeria/>
      <PreguntasFrecuentes/>
      <Contacto/>
      <Footer/>
      <WhatsappFlotante/>
    </>
  )
}

export default App
