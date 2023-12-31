import React from "react";

function FilterButton(props) {
  return (
    <button
      type="button"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
      className="btn btn-secondary"
    >
      <span className="visually-hidden">show</span>
      <span>{props.name}</span>
      <span className="visually-hidden">tasks</span>
    </button>
  );
}

export default FilterButton;
