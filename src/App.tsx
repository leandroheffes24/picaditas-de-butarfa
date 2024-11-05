import './App.css'
import Contacto from './components/Contacto/Contacto'
import Galeria from './components/Galeria/galeria'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import NuestrasEspecialidades from './components/NuestrasEspecialidades/NuestrasEspecialidades'
import Slider from './components/Slider/Slider'

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Slider/>
      <NuestrasEspecialidades/>
      <Galeria/>
      <Contacto/>
    </>
  )
}

export default App
