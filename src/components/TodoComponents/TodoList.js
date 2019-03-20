// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import "./Todo.css";

const TodoList = props => {
  console.log(props);
  return (
    <div>
      <h3>{props.listProp.task}</h3>
      <p>{props.listProp.id}</p>
      <p>{props.listProp.completed}</p>
    </div>
  );
};

export default TodoList;
