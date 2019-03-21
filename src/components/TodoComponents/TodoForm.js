import React from "react";
import "./Todo.css";

const TodoForm = props => {
  return (
    <form>
      <input
        name="task"
        className="input"
        type="text"
        value={props.inputText}
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
