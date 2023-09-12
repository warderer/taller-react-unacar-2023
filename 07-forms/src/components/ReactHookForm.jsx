import logo from '../assets/react.svg'

const ReactHookForm = () => {
  return (
    <div>
      <img src={logo} alt='Logo React' />
      <form onSubmit={() => {}}>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          name='firstName'
          placeholder='Tu nombre'
        />

        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          name='lastName'
          placeholder='Tu apellido'
        />

        <label htmlFor='gender'>Gender</label>
        <select name='gender'>
          <option value=''>Selecciona tu género</option>
          <option value='M'>Masculino</option>
          <option value='F'>Femenino</option>
          <option value='O'>Otro</option>
        </select>

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          placeholder='correo@mail.com'
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
        />

        <button type='submit'>Register</button>
      </form>
    </div>
  )
}
export default ReactHookForm
