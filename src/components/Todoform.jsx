
import React, { useState } from 'react';
import './Todoform.css';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd({ id: uuidv4(), text: text.trim(), description: description.trim(), completed: false });
      setText('');
      setDescription('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a description..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
