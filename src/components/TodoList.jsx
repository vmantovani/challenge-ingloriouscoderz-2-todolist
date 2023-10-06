import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoListItems from './TodoListItems'

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Look for a job', completed: false },
    { id: 3, text: 'Forget everything', completed: false },
  ])

  const addTodo = (newTodo) => {
    const newId = todos.length + 1
    setTodos([...todos, { id: newId, text: newTodo, completed: false }])
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
      <h1>Vinicius&apos;s Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoListItems
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}

export default TodoList
