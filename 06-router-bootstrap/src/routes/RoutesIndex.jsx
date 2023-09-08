import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Portafolio from '../pages/Portafolio'
import Contacto from '../pages/Contacto'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/portafolio' element={<Portafolio />} />
      <Route path='/contacto' element={<Contacto />} />
    </Routes>
  )
}
export default RoutesIndex
