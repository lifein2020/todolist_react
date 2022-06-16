function Todo({ todo, toggleTodo, removeTodo }) {
    return (
            <ul key={todo.id}  className="item">
                <li
                    className={todo.complete ? "item__text item__text_strike" : "item__text"}
                    onClick={() => toggleTodo(todo.id)}
                >
                    {todo.task}
                </li>
                <button className="item__button" onClick={() => removeTodo(todo.id)}>
                X
                </button>
            </ul>
    )
}

export default Todo;