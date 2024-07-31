
let todos = [];

export const fetchTodos = async () => {
  const response = await fetch('/data/todos.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  todos = await response.json();
  return todos;
};

export const saveTodos = async (newTodos) => {
  todos = newTodos;
};

export const getTodos = () => todos;
