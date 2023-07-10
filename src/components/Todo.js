import React, { useState } from "react";

function Todo(props) {
  // set state for editing
  const [isEditing, setEditing] = useState(false);

  const editingTemplate = (
    <form>
      <div>
        <label htmlFor={props.id}>New name for {props.name}</label>
        <input type="text" id={props.id} />
      </div>
      {/* button group */}
      <div>
        <button type="button" onClick={() => setEditing(false)}>
          Cancel <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit">
          Save{" "}
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div>
      <div>
        <input
          type="checkbox"
          id={props.id}
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label htmlFor={props.id}>{props.name}</label>
      </div>
      {/* button group */}
      <div>
        <button type="button" onClick={() => setEditing(true)}>
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button type="button" onClick={() => props.deleteTask(props.id)}>
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default Todo;
