import { React } from 'react';

function ToDo(params) {
    const todo = params.data 
    const changeToDoStatus = params.onChangeFunction
    const deleteTodo = params.deleteFunction

  return (
    <div className="todos-container" key={`todos-container-${todo.id}`}>
      <div className="checkbox-content" key="checkbox-content">
        <input type="checkbox" checked={todo.status} onChange={(e) => changeToDoStatus(todo.id, !todo.status)} />
        <p className={`todo-body ${todo.status ? 'cross-lined' : ''}`}>
          {todo.body}
        </p>
      </div>
      <p className="todo-deadline">
        deadline: {todo.deadline}
      </p>
      <button className='delete-button' onClick={(e) => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default ToDo;
