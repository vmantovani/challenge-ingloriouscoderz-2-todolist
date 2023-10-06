import { useState, useEffect, useRef } from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Look for a job', completed: false },
    { id: 3, text: 'Forget everything', completed: false },
  ])
  const [newTodo, setNewTodo] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newId = todos.length + 1
      setTodos([...todos, { id: newId, text: newTodo, completed: false }])
      setNewTodo('')
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault() // Evita que o formulário seja enviado
      addTodo()
    }
  }

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  return (
    <div>
      <h1>Vinicius's Todo List</h1>
      <form>
        <input
          type="text"
          placeholder="What next?"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <button type="button" onClick={addTodo}>
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <p
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? 'gray' : 'black',
                }}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </p>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                  marginLeft: '5px',
                  width: '22px',
                  height: '22px',
                }}
              >
                x
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
