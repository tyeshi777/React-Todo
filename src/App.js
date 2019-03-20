import React from "react";
import Todo from "./components/TodoComponents/Todo";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const listTodo = [
  {
    task: "buy some wanchain",
    id: 123,
    completed: false
  },
  {
    task: "buy some icon",
    id: 124,
    completed: false
  },
  {
    task: "buy some walton",
    id: 125,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      lists: listTodo,
      task: "",
      id: "",
      completed: false,
      inputText: ""
    };
  }
  handleChanges = event => {
    console.log("event", event.target);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  updateList = event => {
    event.preventDefault();
    const newList = {
      task: this.state.task,
      id: this.state.id,
      completed: false
    };
    this.setState({
      lists: [...this.state.lists, newList]
    });
  };

  render() {
    return (
      <div>
        <Todo />
        {this.state.lists.map((task, index) => (
          <TodoList key={index} listProp={task} />
        ))}
        <TodoForm
          inputTask={this.state.inputText}
          task={this.state.task}
          id={this.state.id}
          completed={this.state.completed}
          handleChanges={this.handleChanges}
          updateList={this.updateList}
        />
      </div>
    );
  }
}

export default App;
