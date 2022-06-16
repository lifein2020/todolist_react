import { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function App() {
  //будем хранить список задач в компоненте в виде пустого массива
  const [todos, setTodos] = useState([]);

  // для добавления задачи
  const addTodo = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(30).substr(2,9),
        task: userInput,
        complete: false, // выполненная или невыполненная задача
      }
      setTodos([...todos, newItem]) // добавляем новый элемент в массив
    }
  }

  //удаление задачи 
const removeTodo = (id ) => {
  setTodos([...todos.filter(todo => todo.id !== id)])
}
  //переключение задач
  const handleToggle = (id) => {
    setTodos([ ...todos.map(todo => 
      todo.id === id ? { ...todo, complete: !todo.complete } : {...todo })])
  }

  return (
    <div className="App">
      <header>
        <h1>Список задач: {todos.length}</h1>
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
 