
export const Title = (props) => {
  return (
    <div>
      <h1>{props.titulo}</h1>
      <h2>{props.descripcion}</h2>
      <h3>{props.subtitulo}</h3>
      <p>{props.children}</p>
    </div>
  )
}
