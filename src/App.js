function App() {
  return (
    <main className="todoapp stack-lrg">
      <h1>Todo App</h1>
      {/* form for user task input */}
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="form__label--lrg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="form__input form__input--lrg"
          name="text"
          autoComplete="off"
        ></input>
        <button
          type="submit"
          className="form__btn form__btn--primary form_btn--lrg"
        >
          Add
        </button>
        {/* filter buttons */}
        <div className="filters btn-group stack-exception">
          {/* all tasks */}
          <button type="button" className="btn toggle-btn" aria-pressed="true">
            <span className="visually-hidden">show</span>
            <span>All</span>
            <span className="visually-hidden">tasks</span>
          </button>
          {/* active tasks */}
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">show</span>
            <span>Active</span>
            <span className="visually-hidden">tasks</span>
          </button>
          {/* completed tasks */}
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">show</span>
            <span>Completed</span>
            <span className="visually-hidden">tasks</span>
          </button>
        </div>
        {/* TODO total tasks */}
        <h2 id="list-heading">Tasks to Complete</h2>
        {/* list of tasks: list item with checkbox and update buttons */}
        <ul
          role="list"
          className="todo-list stack-lrg stack-exception"
          aria-labelledby="list-heading"
        >
          {/* task item 1 */}
          <li className="todo-list__item stack-sml">
            {/* checkbox */}
            <div className="checkbox-wrapper">
              <input type="checkbox" id="todo-0" defaultChecked={true} />
              <label htmlFor="todo-0" className="todo-list__item-label">
                Groceries
              </label>
            </div>
            {/* update buttons: edit, delete */}
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden">Groceries</span>
              </button>
              <button type="button" className="btn btn--danger">
                Delete <span className="visually-hidden">Groceries</span>
              </button>
            </div>
          </li>
          {/* task item 2 */}
          <li className="todo-list__item stack-sml">
            {/* checkbox */}
            <div className="checkbox-wrapper">
              <input type="checkbox" id="todo-1" />
              <label htmlFor="todo-1" className="todo-list__item-label">
                Laundry
              </label>
            </div>
            {/* update buttons: edit, delete */}
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden">Laundry</span>
              </button>
              <button type="button" className="btn btn--danger">
                Delete <span className="visually-hidden">Laundry</span>
              </button>
            </div>
          </li>
          {/* task item 3 */}
          <li className="todo-list__item stack-sml">
            {/* checkbox */}
            <div className="checkbox-wrapper">
              <input type="checkbox" id="todo-2" />
              <label htmlFor="todo-2" className="todo-list__item-label">
                Sweep
              </label>
            </div>
            {/* update buttons: edit, delete */}
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden">Sweep</span>
              </button>
              <button type="button" className="btn btn--danger">
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
