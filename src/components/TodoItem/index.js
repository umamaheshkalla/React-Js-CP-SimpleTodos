import './index.css'

const TodoItem = props => {
  const {TodoItems, deleteTodo} = props
  const {id, title} = TodoItems
  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todoListContainer">
      <p className="todos">{title}</p>
      <button className="button" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
