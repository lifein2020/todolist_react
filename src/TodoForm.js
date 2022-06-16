import { useState } from 'react';

function TodoForm({ addTodo }) {
    const [userInput, setUserInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(userInput);
        setUserInput("");
    }

    const handleChange = (e) => {
         setUserInput(e.currentTarget.value) // получаем событие, из которого получать значения и отправлять его в useState используя setUserInput
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Введите значение"
            />
            <button>Сохранить</button>

        </form>
    )
}

export default TodoForm;