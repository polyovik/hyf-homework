import { React, useState } from 'react';

function ToDo(props) {
  const todo = props.data;
  const changeToDoStatus = props.onChangeFunction;
  const updateToDoDescription = props.updateToDoDescription;
  const deleteTodo = props.deleteFunction;

  const [newDescription, setNewDescription] = useState(todo.description);
  const [editMode, setEditMode] = useState(false);

  const handleDescriptionChange = (description) => {
    setNewDescription(description);
  };

  const saveUpdate = () => {
    updateToDoDescription(todo.id, newDescription);
    setEditMode(false);
  };

  const editSection = !editMode ? (
    <div>
      <div className="checkbox-content">
        <input type="checkbox" checked={todo.status} onChange={(e) => changeToDoStatus(todo.id, !todo.status)} />
        <p className={`todo-body ${todo.status ? 'cross-lined' : ''}`}>{todo.description}</p>
      </div>
      <p className="todo-deadline">deadline: {todo.deadline}</p>
      <button className="edit-button" onClick={() => setEditMode(true)}>
        Edit{' '}
      </button>
    </div>
  ) : ( 
    <div>
      <input
        type="text"
        value={newDescription}
        onChange={(e) => {
          handleDescriptionChange(e.target.value);
        }}
      />{' '}
      <button className="update-button"  disabled={newDescription.length === 0} onClick={() => saveUpdate()}>
        Update{' '}
      </button>
      <button className="cancel-update-button" onClick={() => setEditMode(false)}>
        Cancel update{' '}
      </button>
      ;
    </div>
  );
  return (
    <div className="todos-container">
      {editSection}
      <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </div>
  );
}

export default ToDo;
