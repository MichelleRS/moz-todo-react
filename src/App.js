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
          <li>
            {/* checkbox */}
            <div>
              <input type="checkbox" id="todo-0" defaultChecked={true} />
              <label htmlFor="todo-0">Groceries</label>
            </div>
            {/* update buttons: edit, delete */}
            <div>
              <button type="button">
                Edit <span className="visually-hidden">Groceries</span>
              </button>
              <button type="button">
                Delete <span className="visually-hidden">Groceries</span>
              </button>
            </div>
          </li>
          {/* task 2 */}
          <li>
            {/* checkbox */}
            <div>
              <input type="checkbox" id="todo-1" />
              <label htmlFor="todo-1">Laundry</label>
            </div>
            {/* update buttons: edit, delete */}
            <div>
              <button type="button">
                Edit <span className="visually-hidden">Laundry</span>
              </button>
              <button type="button">
                Delete <span className="visually-hidden">Laundry</span>
              </button>
            </div>
          </li>
          {/* task 3 */}
          <li>
            {/* checkbox */}
            <div>
              <input type="checkbox" id="todo-2" />
              <label htmlFor="todo-2">Sweep</label>
            </div>
            {/* update buttons: edit, delete */}
            <div>
              <button type="button">
                Edit <span className="visually-hidden">Sweep</span>
              </button>
              <button type="button">
                Delete <span className="visually-hidden">Sweep</span>
              </button>
            </div>
          </li>
        </ul>
      </form>
    </main>
  );
}

export default App;
