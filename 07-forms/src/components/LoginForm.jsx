import logo from '../assets/react.svg'

const LoginForm = () => {
  return (
    <div>
      <img src={logo} alt='Logo React' />
      <form onSubmit={() => {}}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='correo@mail.com'
          onChange={() => {}}
          value=''
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          onChange={() => {}}
          value=''
        />

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
export default LoginForm
