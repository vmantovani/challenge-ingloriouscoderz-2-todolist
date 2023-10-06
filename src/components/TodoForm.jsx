import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newTodo.trim() !== '') {
      addTodo(newTodo)
      setNewTodo('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What next?"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        ref={inputRef}
      />
      <button type="submit">Add</button>
    </form>
  )
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default TodoForm
