import "./Todo.css";
import React, { useRef, useEffect, useState } from "react";

// custom hook: get previous value
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function Todo(props) {
  // set state for editing
  const [isEditing, setEditing] = useState(false);
  // set state for new name edit
  const [newName, setNewName] = useState("");

  // initialize references for focus management of edit field and edit button
  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);

  // initialize variable to track the previous value of isEditing
  const wasEditing = usePrevious(isEditing);

  // handle new name change
  function handleNameChange(e) {
    setNewName(e.target.value);
  }
  // handle new name submit
  function handleNameSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form onSubmit={handleNameSubmit}>
      <div className="todo-control todo-edit-control">
        <label htmlFor={props.id} className="todo-edit-label">
          New name for {props.name}
        </label>
        <input
          type="text"
          id={props.id}
          value={newName}
          onChange={handleNameChange}
          ref={editFieldRef}
          // className="todo-input-text"
        />
      </div>
      {/* button group */}
      <div className="todo-btn-group">
        <button type="submit" className="btn btn-primary">
          Save{" "}
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
        <button
          type="button"
          onClick={() => setEditing(false)}
          className="btn btn-secondary warning"
        >
          Cancel <span className="visually-hidden">renaming {props.name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div>
      <div className="todo-control todo-view-control">
        <input
          type="checkbox"
          id={props.id}
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
          // className="todo-input-checkbox"
        />
        <label htmlFor={props.id} className="todo-view-label">
          {props.name}
        </label>
      </div>
      {/* button group */}
      <div className="todo-btn-group">
        <button
          type="button"
          onClick={() => setEditing(true)}
          ref={editButtonRef}
          className="btn btn-primary"
        >
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          onClick={() => props.deleteTask(props.id)}
          className="btn btn-secondary warning"
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  useEffect(() => {
    // if user was not editing or is editing, move browser focus to edit input element
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus();
    }
    // if user was editing or is not editing, move browser focus to edit button
    if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    }
  }, [wasEditing, isEditing]);

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default Todo;
