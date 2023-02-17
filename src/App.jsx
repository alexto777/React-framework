import './App.css'
import { Title } from "./components/title/Title";
import { Hijo } from "./components/hijo/Hijo";

function App() {


  function handleClick() {
    console.log("like")
    alert("Le diste like")
  }

  return (
    <div className="App">
      <Title titulo="Los vengadores" descripcion="Pelicula de superheroes" subtitulo="Avengers 2" >
        Hola
      </Title>
      <button onClick={handleClick}>Like</button>
      <Title titulo="Generos" />
      <Title titulo="Actores" />
      <Hijo/>

    </div>
  )
}


export default App