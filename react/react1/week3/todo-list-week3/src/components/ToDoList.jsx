import React, { useEffect, useState } from 'react';
import ToDo from './ToDo';
import Border from './Border';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ToDoList() {
  const [todoList, setTodos] = useState([]);
  const [todoBody, setTodoBody] = useState('');
  const [todoDeadline, setTodoDeadline] = useState(new Date());
  const [addNewToDoError, setNewTodoError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw`);
      const data = await res.json();
      console.log(data);
      data.map((dataItem) => {
        dataItem.error = null;
        return dataItem;
      });
      setTodos(data);
    }
    fetchData();
  }, []);

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

  const updateToDoDescription = (id, description) => {
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, description };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const addNewTodo = () => {
    if (todoBody.length === 0) {
      setNewTodoError('Empty description');
      return;
    }
    const newTodo = {
      id: randomInteger(0, 1000),
      description: todoBody,
      deadline: todoDeadline.toISOString(),
      status: false,
    };

    setTodos([...todoList, newTodo]);
  };

  const getTodos = () => {
    return todoList.map((todo) => {
      return (
        <Border>
          <ToDo
            key={`todo-${todo.id}`}
            data={todo}
            updateToDoDescription={updateToDoDescription}
            onChangeFunction={changeToDoStatus}
            deleteFunction={deleteToDo}
          />
        </Border>
      );
    });
  };
  const validationError = addNewToDoError !== null ? <p>{addNewToDoError}</p> : null;
  const render = todoList.length ? getTodos() : <p>No items</p>;

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="todo body"
          value={todoBody}
          onChange={(e) => {
            setTodoBody(e.target.value);
            setNewTodoError(null);
          }}
        />
        <DatePicker selected={todoDeadline} showTimeSelect dateFormat="Pp" onChange={(date) => setTodoDeadline(date)} />
        <button onClick={addNewTodo}>Add new todo</button>
        {validationError}
      </div>
      {render}
    </div>
  );
}

export default ToDoList;
