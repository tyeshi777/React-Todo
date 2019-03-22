// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import "./Todo.css";

const TodoList = props => {
  console.log(props);
  return (
    <div
      className={`listProp${props.id.completed ? " completed" : ""}`}
      onClick={() => props.toggleItem(props.id)}
    >
      <p>{props.listProp.task}</p>
    </div>
  );
};

export default TodoList;
