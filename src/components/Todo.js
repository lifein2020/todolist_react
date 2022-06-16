function Todo({ todo, toggleTodo, deleteTodo }) {
    return (
            <li className="item">
                <p key={todo.id} 
                    className={todo.complete ? "item__text item__text_strike" : "item__text"}
                    onClick={() => toggleTodo(todo.id)}
                >
                    {todo.task}
                   
                </p>
                <button className="item__button" onClick={() => deleteTodo(todo.id)}>
                    X
                </button>
            </li>
                
           
    )
}

export default Todo;