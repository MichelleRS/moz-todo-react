import React from "react";

function Todo(props) {
  return (
    <li>
      {/* checkbox */}
      <div>
        <input type="checkbox" id={props.id} defaultChecked={props.completed} />
        <label htmlFor={props.id}>{props.name}</label>
      </div>
      {/* update buttons: edit, delete */}
      <div>
        <button type="button">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button type="button">
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}

export default Todo;
