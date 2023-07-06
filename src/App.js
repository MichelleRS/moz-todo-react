import React from "react";
import Form from "./components/Form.js";
import FilterButton from "./components/FilterButton.js";
import Todo from "./components/Todo.js";

function App(props) {
  // callback prop to get task input from form
  function addTask(name) {
    alert(name);
  }
  // get tasks data from index.js
  const taskList = props.tasks.map((task) => (
    <Todo
      key={task.id}
      id={task.id}
      name={task.name}
      completed={task.completed}
    />
  ));
  return (
    <main>
      <h1>Todo App</h1>
      {/* form for user task input */}
      <Form addTask={addTask} />
      {/* filter buttons */}
      <div>
        {/* all tasks */}
        <FilterButton />
        {/* TODO active tasks */}
        <FilterButton />
        {/* TODO completed tasks */}
        <FilterButton />
      </div>
      {/* TODO total tasks */}
      <h2>Tasks to Complete</h2>
      {/* list of tasks: list item with checkbox and update buttons */}
      <ul role="list" aria-labelledby="list-heading">
        {taskList}
      </ul>
    </main>
  );
}

export default App;
