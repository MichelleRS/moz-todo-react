import React from "react";

function FilterButton() {
  return (
    <button type="button" aria-pressed="true">
      <span className="visually-hidden">show</span>
      <span>All</span>
      <span className="visually-hidden">tasks</span>
    </button>
  );
}

export default FilterButton;
