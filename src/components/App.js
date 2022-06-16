import { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString().slice(2, 10),
        task: userInput,
        complete: false,
      }
      setTodos([...todos, newItem])
    }
  }

  const deleteTodo = (id) => {
    setTodos([...todos.filter(todo => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([ ...todos.map(todo => 
      todo.id === id ? { ...todo, complete: !todo.complete } : {...todo })])
  }

  return (
      <div className="container">
        <header>
          <h1 className="title">Список задач: {todos.length}</h1>
        </header>
        <TodoForm addTodo={addTodo} />
        <ul className="list">
          {todos.map((todo) => {
            return (
              <Todo 
                todo={todo}
                key={todo.id} 
                toggleTodo={handleToggle}
                deleteTodo={deleteTodo}
              />
            )
          })}
        </ul>
      </div>
  );
}

export default App;
 