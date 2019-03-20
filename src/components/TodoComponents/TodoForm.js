import React from "react";
import "./Todo.css";

const TodoForm = props => {
  return (
    <form>
      <input
        className="input"
        type="text"
        value={props.id}
        placeholder="...Todo"
        onChange={props.handleChanges}
      />
      <button className="btn" onClick={props.updateList}>
        Add Todo
      </button>
      <button className="btn">Clear Completed</button>
    </form>
  );
};

export default TodoForm;
