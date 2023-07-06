import Todo from "./components/Todo.js";

function App(props) {
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
      <form>
        <label htmlFor="new-todo-input">What needs to be done?</label>
        <input
          type="text"
          id="new-todo-input"
          name="text"
          autoComplete="off"
        ></input>
        <button type="submit">Add</button>
        {/* filter buttons */}
        <div>
          {/* all tasks */}
          <button type="button" aria-pressed="true">
            <span className="visually-hidden">show</span>
            <span>All</span>
            <span className="visually-hidden">tasks</span>
          </button>
          {/* active tasks */}
          <button type="button" aria-pressed="false">
            <span className="visually-hidden">show</span>
            <span>Active</span>
            <span className="visually-hidden">tasks</span>
          </button>
          {/* completed tasks */}
          <button type="button" aria-pressed="false">
            <span className="visually-hidden">show</span>
            <span>Completed</span>
            <span className="visually-hidden">tasks</span>
          </button>
        </div>
        {/* TODO total tasks */}
        <h2>Tasks to Complete</h2>
        {/* list of tasks: list item with checkbox and update buttons */}
        <ul role="list" aria-labelledby="list-heading">
          {taskList}
        </ul>
      </form>
    </main>
  );
}

export default App;
