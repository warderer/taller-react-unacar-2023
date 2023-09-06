import { useState } from 'react'
import ToDoItem from './ToDoItem'

// Los estados en React sirven para guardar información que se va a utilizar en el componente. Esta información tiene la particularidad de que se  actualiza la vista automáticamente cuando cambia el estado.
const ToDoList = () => {
  // Guardo lo que se escriba en el input
  const [inputValue, setInputValue] = useState('')

  // Añadir un estado nuevo para almacenar la lista de tareas en un arreglo.
  const [todos, setTodos] = useState([])

  const handleAdd = () => {
    setTodos([...todos, inputValue]) // Añado el nuevo valor al arreglo
    setInputValue('') // Limpio el input
  }

  const handleDelete = (index) => {
    setTodos(todos.filter((todo, i) => i !== index))
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
        {
            // Iteramos el arreglo de ToDos con Map
            todos.map((todo, index) => (
              <ToDoItem
                key={index}
                todoName={todo}
                handleDelete={() => handleDelete(index)}
              />
            ))
        }
      </ul>
    </div>
  )
}
export default ToDoList
