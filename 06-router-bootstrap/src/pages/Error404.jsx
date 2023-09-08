import { useLocation } from 'react-router-dom'

const Error404 = () => {
  const location = useLocation()

  return (
    <>
      <h1>Error 404</h1>
      <p>Página no encontrada: {location.pathname}</p>
    </>

  )
}
export default Error404
