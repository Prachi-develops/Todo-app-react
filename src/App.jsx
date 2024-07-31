
import React, { useState, useEffect } from 'react';
import TodoForm from './components/Todoform';
import TodoList from './components/Todolist';
import SearchBar from './components/Searchbar';
import { v4 as uuidv4 } from 'uuid';
import './index.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Initialize with dummy data
    const initialTodos = [
      {
        id: uuidv4(),
        text: 'Learn React',
        description: 'Study the fundamentals of React, including hooks and state management.',
        completed: false,
        lastUpdated: new Date().toLocaleString(),
      },
      {
        id: uuidv4(),
        text: 'Build a TODO app',
        description: 'Create a simple TODO application using React.',
        completed: false,
        lastUpdated: new Date().toLocaleString(),
      },
    ];
    setTodos(initialTodos);
  }, []);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, { ...todo, lastUpdated: new Date().toLocaleString() }]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed, lastUpdated: new Date().toLocaleString() } : todo
      )
    );
  };

  const editTodo = (id, newText, newDescription) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, text: newText, description: newDescription, lastUpdated: new Date().toLocaleString() }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>TODO List</h1>
      <SearchBar query={searchQuery} onChange={setSearchQuery} />
      <TodoForm onAdd={addTodo} />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onEdit={editTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
};

export default App;
