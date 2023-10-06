import PropTypes from 'prop-types'

const TodoListItems = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
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
              style={{ marginLeft: '5px', width: '22px', height: '22px' }}
            >
              x
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

TodoListItems.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default TodoListItems
