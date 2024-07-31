
import React, { useState } from 'react';
import './Todoitem.css';

const TodoItem = ({ todo, onToggle, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [newDescription, setNewDescription] = useState(todo.description);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, newText, newDescription);
    }
    setIsEditing(!isEditing);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {isEditing ? (
        <div className="todo-item-edit">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Add a description..."
          />
        </div>
      ) : (
        <div className="todo-item-view">
          <span>{todo.text}</span>
          <button className="expand" onClick={toggleExpand}>
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
        </div>
      )}
      {isExpanded && !isEditing && (
        <div className="todo-item-expanded">
          <p>{todo.description}</p>
          <p>Last Updated: {todo.lastUpdated}</p>
        </div>
      )}
      <button className="edit" onClick={handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button className="delete" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
