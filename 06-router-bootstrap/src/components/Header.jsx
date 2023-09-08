import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='/'>
          UNACAR
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>

            <li className='nav-item'>
              <NavLink className='nav-link active' aria-current='page' to='/'>
                Home
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink className='nav-link' to='/portafolio'>
                Portafolio
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink className='nav-link' to='/contacto'>
                Contacto
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Header
