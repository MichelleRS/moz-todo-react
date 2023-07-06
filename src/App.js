import Todo from "./components/Todo.js";

function App() {
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
          {/* task 1 */}
          <Todo name="Groceries" id="todo-0" completed={true} />
          {/* task 2 */}
          <Todo name="Laundry" id="todo-1" completed={false} />
          {/* task 3 */}
          <Todo name="Sweep" id="todo-2" completed={false} />
        </ul>
      </form>
    </main>
  );
}

export default App;
