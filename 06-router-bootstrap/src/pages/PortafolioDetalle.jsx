import { useParams, useNavigate } from 'react-router-dom'

const PortafolioDetalle = () => {
  const portafolio = [
    { id: 1, nombre: 'Proyecto 1: Arboles Binarios', descripcion: 'Descripcion 1' },
    { id: 2, nombre: 'Proyecto 2: Página Web', descripcion: 'Descripcion 2' },
    { id: 3, nombre: 'Proyecto 3: Calculadora', descripcion: 'Descripcion 3' }
  ]

  // useParams() es un hook que nos permite obtener los parámetros de la ruta
  const { pid } = useParams()
  // const pid = useParams().pid

  // useNavigate() es un hook que nos permite navegar entre rutas
  const navigate = useNavigate()

  return (
    <>
      <h2>{portafolio[pid - 1].nombre}</h2>
      <p>{portafolio[pid - 1].descripcion}</p>
      <button onClick={() => navigate('/portafolio')}>Regresar</button>
      {/* Si quiero ir a la página anterior del historial: navigate(-1)  */}
      {/* Si quiero ir a la página siguiente del historial: navigate(1) */}
    </>
  )
}
export default PortafolioDetalle
