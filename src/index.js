import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const DATA = [
  { id: "todo-0", name: "Groceries", completed: true },
  { id: "todo-1", name: "Laundry", completed: false },
  { id: "todo-2", name: "Sweep", completed: false },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* pass DATA as a prop called tasks */}
    <App tasks={DATA} />
  </React.StrictMode>
);
