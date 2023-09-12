import { useForm } from 'react-hook-form'
import logo from '../assets/react.svg'

const ReactHookForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = data => console.log(data)

  return (
    <div>
      <img src={logo} alt='Logo React' />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          name='firstName'
          placeholder='Tu nombre'
          {...register('firstName', { required: true, maxLength: 20 })}
        />

        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          name='lastName'
          placeholder='Tu apellido'
          {...register('lastName', { pattern: /^[A-Za-z]+$/i })}
        />

        <label htmlFor='gender'>Gender</label>
        <select name='gender' {...register('gender')}>
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
          {...register('email')}
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          {...register('password')}
        />

        <button type='submit'>Register</button>
      </form>
    </div>
  )
}
export default ReactHookForm
