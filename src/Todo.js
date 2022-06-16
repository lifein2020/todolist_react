function Todo({ todo, toggleTodo, removeTodo }) {
    return (
        <div key={todo.id} className="item-todo">
            <div 
                className={todo.complete ? "item-text strike" : "item-text"}
                onClick={() => toggleTodo(todo.id)}
            >
                {todo.task}
            </div>
            <div className="item-delete" onClick={() => removeTodo(todo.id)}>
                X
            </div>
        </div>
    )
}

export default Todo;