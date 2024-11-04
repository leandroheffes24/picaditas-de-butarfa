import './App.css'
import Galeria from './components/Galeria/galeria'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import NuestrasEspecialidades from './components/NuestrasEspecialidades/NuestrasEspecialidades'

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <NuestrasEspecialidades/>
      <Galeria/>
    </>
  )
}

export default App
