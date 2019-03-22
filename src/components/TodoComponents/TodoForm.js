import React from "react";
import "./Todo.css";

const TodoForm = props => {
  return (
    <form>
      <input
        name="task"
        className="input"
        type="text"
        value={props.task}
        placeholder="...Todo"
        onChange={props.handleChanges}
      />
      <button className="btn" onClick={props.addTodo}>
        Add Todo
      </button>
      <button className="btn" onClick={props.clearDone}>
        Clear
      </button>
    </form>
  );
};

export default TodoForm;
