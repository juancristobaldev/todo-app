import React from "react";
import '../styles/scss/TodoSearch.scss';

const TodoSearch = ({ search, handleVariables }) => {
  return (
    <div className="todoSearchDiv">
      <div className="divInput">
        <input
          placeholder="Search Task"
          name="search"
          value={search}
          onChange={handleVariables}
        />
      </div>
    </div>
  );
}

export default TodoSearch;
