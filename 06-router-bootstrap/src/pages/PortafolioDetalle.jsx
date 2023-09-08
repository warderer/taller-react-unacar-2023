import { useParams } from 'react-router-dom'

const PortafolioDetalle = () => {
  const portafolio = [
    { id: 1, nombre: 'Proyecto 1: Arboles Binarios', descripcion: 'Descripcion 1' },
    { id: 2, nombre: 'Proyecto 2: Página Web', descripcion: 'Descripcion 2' },
    { id: 3, nombre: 'Proyecto 3: Calculadora', descripcion: 'Descripcion 3' }
  ]

  const { pid } = useParams()
  // const pid = useParams().pid

  return (
    <>
      <h2>{portafolio[pid - 1].nombre}</h2>
      <p>{portafolio[pid - 1].descripcion}</p>
    </>
  )
}
export default PortafolioDetalle
