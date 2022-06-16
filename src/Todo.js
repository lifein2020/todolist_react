function Todo({ todo, toggleTodo, deleteTodo }) {
    return (
            <ul className="item">
                <li key={todo.id} 
                    className={todo.complete ? "item__text item__text_strike" : "item__text"}
                    onClick={() => toggleTodo(todo.id)}
                >
                    {todo.task}
                </li>
                <button className="item__button" onClick={() => deleteTodo(todo.id)}>
                X
                </button>
            </ul>
    )
}

export default Todo;