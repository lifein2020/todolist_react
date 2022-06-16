import { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(30).substr(2,9),
        task: userInput,
        complete: false,
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTodo = (id ) => {
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
        {todos.map((todo) => {
          return (
            <Todo 
              todo={todo}
              key={todo.id} 
              toggleTodo={handleToggle}
              removeTodo={removeTodo}
            />
          )
        })}

      </div>
  );
}

export default App;
 