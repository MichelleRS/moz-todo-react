import React, { useState } from "react";
import Form from "./components/Form.js";
import FilterButton from "./components/FilterButton.js";
import Todo from "./components/Todo.js";

function App(props) {
  // pass props.task from index.js into useState() hook to set its initial state
  const [tasks, setTasks] = useState(props.tasks);

  // callback prop to get and set task input from form
  function addTask(name) {
    // TODO give each task a unique identifier
    const newTask = { id: "id", name, completed: false };
    setTasks([...tasks, newTask]);
  }

  // get tasks data from index.js
  const taskList = tasks.map((task) => (
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
