import { useState } from 'react';

function TodoForm({ addTodo }) {
    const [userInput, setUserInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(userInput);
        setUserInput("");
    }

    const handleChange = (e) => {
         setUserInput(e.currentTarget.value)
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e);
        }
    }

    return (
        <form 
            className="form"
            onSubmit={handleSubmit}>
            <input
                className="form__input"
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Введите задачу"
            />
            <button className="form__button">+</button>
        </form>
    )
}

export default TodoForm;