// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import "./Todo.css";

const TodoList = props => {
  // console.log(props);
  return (
    <div>
      <h3>{props.todoListProp.task}</h3>
      <p>{props.todoListProp.id}</p>
      <p>{props.todoListProp.completed}</p>
    </div>
  );
};

export default TodoList;
