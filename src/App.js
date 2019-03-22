import React from "react";
import Todo from "./components/TodoComponents/Todo";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const listTodo = [
  {
    task: "learn react",
    id: 100,
    completed: false
  },
  {
    task: "start with props",
    id: 101,
    completed: false
  },
  {
    task: "start with state",
    id: 102,
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
      completed: false
    };
  }
  handleChanges = event => {
    // console.log("event", event.target);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTodo = event => {
    event.preventDefault();
    const newList = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      lists: [...this.state.lists, newList],
      task: ""
    });
  };

  toggleItem = id => {
    console.log(id);
    this.setState({
      lists: this.state.lists.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };
  clearDone = event => {
    // console.log("cleardone");
    // event.preventDefault();
    // this.setState({
    //   lists: this.state.lists.map(item => item + "hello")
    // });
  };
  render() {
    return (
      <div>
        <Todo toggleItem={this.toggleItem} />
        {this.state.lists.map((task, index) => (
          <TodoList
            id={task.id}
            key={index}
            listProp={task}
            toggleItem={this.toggleItem}
          />
        ))}
        <TodoForm
          task={this.state.task}
          id={this.state.id}
          completed={this.state.completed}
          handleChanges={this.handleChanges}
          addTodo={this.addTodo}
          clearDone={this.clearDone}
        />
      </div>
    );
  }
}

export default App;
