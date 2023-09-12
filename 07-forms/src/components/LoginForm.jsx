// Formulario Controlado
// Necesito usar estados de react para controlar los valores del formulario
import { useState } from 'react'

import logo from '../assets/react.svg'

const LoginForm = () => {
  // Paso #2: Crear los estados para los valores del formulario
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Paso #4: Crear la función que se ejecutará al enviar el formulario
  const handleSubmit = (event) => {
    event.preventDefault() // evito que se recargue la página
    const submittedData = JSON.stringify({ email, password })
    console.log(submittedData)
  }

  // Paso #1: Crear mi formulario base en JSX
  return (
    <div>
      <img src={logo} alt='Logo React' />
      <form onSubmit={handleSubmit}>
        {/* Paso #3: Guardar cada cambio del input en su estado */}
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='correo@mail.com'
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
export default LoginForm
