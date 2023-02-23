import  Hijo  from "./hijo/Hijo";

const frutas =['Iron Man','Capitán América', 'Thor', 'Loki'];
const descrip = "Personajes";

const Padre = (props) => {
  const hijos = () => 
  frutas.map((fruta) => 
  <Hijo fruta ={fruta} />);
  return (
    <>
    <h1>{descrip}</h1>
    <ul>{hijos()}</ul>
    <p>{props.children}</p>
    </>
  );
};

export default Padre;