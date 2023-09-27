import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form.js";
import FilterButton from "./components/FilterButton.js";
import Todo from "./components/Todo.js";
import { useRef } from "react";
import { useEffect } from "react";

// custom hook: get previous value
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

// object to store filter names and behavior
const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
// collect array of filter names from FILTER_MAP
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  // pass props.task from index.js into useState() hook to set its initial state
  const [tasks, setTasks] = useState(props.tasks);
  // hook for filter state
  const [filter, setFilter] = useState("All");

  // callback prop to get and set task input from form
  function addTask(name) {
    const newTask = { id: crypto.randomUUID(), name, completed: false };
    setTasks([...tasks, newTask]);
  }

  // toggle completed prop
  function toggleTaskCompleted(id) {
    console.log("tasks[0]", tasks[0]);
    const updatedTasks = tasks.map((task) => {
      // if task has same ID as edited task
      if (id === task.id) {
        // use object spread to make a new object
        // invert completed prop
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  // delete task
  function deleteTask(id) {
    //  exclude a task from the new array (remainingTasks) if its id prop matches the id argument passed into deleteTask()
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  // edit task
  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      // check for tasks that match the id of the task being edited
      if (id === task.id) {
        // add task to new array
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  // get tasks data from index.js
  const taskList = tasks.filter(FILTER_MAP[filter]).map((task) => (
    <Todo
      key={task.id}
      id={task.id}
      name={task.name}
      completed={task.completed}
      // callback prop for toggling completed
      toggleTaskCompleted={toggleTaskCompleted}
      // callback prop to delete task
      deleteTask={deleteTask}
      // callback prop to edit task
      editTask={editTask}
    />
  ));

  // initialize variable for list of filter names
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  // initialize reference for focus management of heading
  const listHeadingRef = useRef(null);
  // initialize variable to store previous tasks by tracking the length of the tasks state
  const prevTaskLength = usePrevious(tasks.length);

  // put focus on task list heading when user deletes a task
  useEffect(() => {
    // if there are fewer tasks in list, put focus on task list heading
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);

  return (
    <main>
      <h1>Todo App</h1>
      {/* form for user task input */}
      <Form addTask={addTask} />
      {/* filter buttons */}
      <div>{filterList}</div>
      {/* TODO total tasks */}
      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
        Tasks to Complete
      </h2>
      {/* list of tasks: list item with checkbox and update buttons */}
      <ul
        role="list"
        aria-labelledby="list-heading"
        className="taskListContainer"
      >
        {taskList}
      </ul>
    </main>
  );
}

export default App;
