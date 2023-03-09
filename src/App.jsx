import './App.css'
import { Title } from "./components/title/Title";
import  Padre  from "./components/Padre";

function App() {

  function handleClick() {
    console.log("like")
    alert("Le diste like")
  }

  return (
    <div className="App">
      {/* <Title titulo="Los vengadores" descripcion="Pelicula de superheroes" subtitulo="Avengers 2" />
      <button onClick={handleClick}>Like</button>
      <Title subtitulo="Generos" />
      <Title subtitulo="Actores" />
      <Padre> Hola </Padre> */}
    </div>
  )
}


export default App