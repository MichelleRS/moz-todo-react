import React from "react";

function Form() {
  return (
    <form>
      <label htmlFor="new-todo-input">What needs to be done?</label>
      <input
        type="text"
        id="new-todo-input"
        name="text"
        autoComplete="off"
      ></input>
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
