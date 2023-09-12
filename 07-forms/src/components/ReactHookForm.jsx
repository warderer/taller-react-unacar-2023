import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import logo from '../assets/react.svg'

const schema = yup.object({
  firstName: yup.string().required('First name is required.'),
  lastName: yup.string().required('Last name is required.'),
  gender: yup.mixed().oneOf(['M', 'F', 'O']).required('Gender is required.'),
  email: yup.string().email('Invalid email').required('Email is required.'),
  password: yup.string().required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%.^&*])/, 'La contraseña debe tener al menos 8 caracteres, un número, una letra mayúscula, una letra minúscula y un caracter especial')
}).required()

const ReactHookForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

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
          {...register('firstName')}
        />
        <p>{errors.firstName?.message}</p>

        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          name='lastName'
          placeholder='Tu apellido'
          {...register('lastName')}
        />
        <p>{errors.lastName?.message}</p>

        <label htmlFor='gender'>Gender</label>
        <select name='gender' {...register('gender')}>
          <option value=''>Selecciona tu género</option>
          <option value='M'>Masculino</option>
          <option value='F'>Femenino</option>
          <option value='O'>Otro</option>
        </select>
        <p>{errors.gender?.message}</p>

        <label htmlFor='email'>Email</label>
        <input
          name='email'
          placeholder='correo@mail.com'
          {...register('email')}
        />
        <p>{errors.email?.message}</p>

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          {...register('password')}
        />
        <p>{errors.password?.message}</p>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}
export default ReactHookForm
