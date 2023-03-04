import React, { useState } from 'react';
import ToDo from './ToDo';

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const initialTodos = [
  { id: 1, body: 'Get out of bed', deadline: 'Wed Sep 13 2017', status: false },
  { id: 2, body: 'Brush teeth', deadline: 'Thu Sep 14 2017', status: false },
  { id: 3, body: 'Eat breakfast', deadline: 'Fri Sep 15 2017', status: false },
];

function ToDoList() {
  const [todoList, setTodos] = useState(initialTodos);
  const [todoBody, setTodoBody] = useState('');
  const [todoDeadline, setTodoDeadline] = useState('');

  const changeToDoStatus = (id, newStatus) => {
    const newTodoListState = todoList.map((todo) => {
      if (todo.id === id) {
        todo.status = newStatus;
      }
      return todo;
    });
    setTodos(newTodoListState);
  };

  const deleteToDo = (id) => {
    const newTodoListState = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodoListState);
  };

  const addNewTodo = () => {
    const newTodo = {
      id: randomInteger(0, 1000),
      body: todoBody,
      deadline: todoDeadline,
      status: false,
    };

    setTodos([...todoList, newTodo]);
  };

  const getTodos = () => {
    return todoList.map((todo) => {
      return <ToDo key={`todo-${todo.id}`} data={todo} onChangeFunction={changeToDoStatus} deleteFunction={deleteToDo} />;
    });
  };
  const render = todoList.length ? getTodos() : <p>No items</p>;
  return (
    <div>
      <div>
        <input type="text" placeholder='todo body' value={todoBody} onChange={e => {setTodoBody(e.target.value)}}/>
        <input type="text" placeholder='tody deadline' value={todoDeadline} onChange={e => {setTodoDeadline(e.target.value)}}/>
        <button onClick={addNewTodo}>Add new todo</button>
      </div>
      {render}
    </div>
  );
}

export default ToDoList;
