import React, { useState } from "react";

function Form(props) {
  // set initial state for name
  const [name, setName] = useState("");

  function handleChange(e) {
    // update state for name
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // send task to App
    props.addTask(name);
    // clear input after submit
    setName("");
  }

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <label htmlFor="new-todo-input">What needs to be done?</label>
      <div className="add-task-input-wrapper">
        <input
          type="text"
          id="new-todo-input"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        ></input>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
}

export default Form;
