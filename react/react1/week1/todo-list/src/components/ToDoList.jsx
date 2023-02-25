import React, { useState } from 'react';

const initialTodos = [
  { body: 'Get out of bed', deadline: 'Wed Sep 13 2017' },
  { body: 'Brush teeth', deadline: 'Thu Sep 14 2017' },
  { body: 'Eat breakfast', deadline: 'Fri Sep 15 2017' },
];

function ToDoList() {
  const [todoList, setTodos] = useState(initialTodos);

  const getTodos = () => {
    return todoList.map((todo) => {
      return (
        <div className="todos-container">
          <div className="checkbox-content">
            <input type="checkbox" />
            <p className="todo-body">{todo.body}</p>
          </div>
          <p className="todo-deadline">deadline: {todo.deadline}</p>
        </div>
      );
    });
  };
  return <div>{getTodos()}</div>;
}

export default ToDoList;
