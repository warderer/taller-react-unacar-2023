import { useState } from 'react'

// Los estados en React sirven para guardar información que se va a utilizar en el componente. Esta información tiene la particularidad de que se  actualiza la vista automáticamente cuando cambia el estado.
const ToDoList = () => {
  // Guardo lo que se escriba en el input
  const [inputValue, setInputValue] = useState('')

  const handleAdd = () => {
    console.log('Agregue Tarea', inputValue)
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type='text'
        value={inputValue}
        onChange={(event) => { setInputValue(event.target.value) }}
      />
      <button onClick={handleAdd}>Agregar</button>
      <ul>
        <li>Item 1<button>eliminar</button></li>
        <li>Item 2<button>eliminar</button></li>
        <li>Item 3<button>eliminar</button></li>
      </ul>
    </div>
  )
}
export default ToDoList
