import { Link, Outlet } from 'react-router-dom'

const Portafolio = () => {
  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Link to='/portafolio/1'>Proyecto 1</Link>
        </li>
        <li>
          <Link to='/portafolio/2'>Proyecto 2</Link>
        </li>
        <li>
          <Link to='/portafolio/3'>Proyecto 3</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}
export default Portafolio
