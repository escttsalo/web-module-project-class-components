import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css'

const todo = [
  {
    task: 'task 1',
    id: 13,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  // constructor() {
  //   super();
  //   this.state = {
  //     todo:todo
  //   }
  // }

  state = {
    todo:todo
  }

  addTask = newTask => {
    this.setState({
      todo:[...this.state.todo,
      {
        task: newTask,
        id: Date.now(),
        completed: false,
      }]
    })
  }

  toggleComplete = taskID =>{
    this.setState({
      todo: this.state.todo.map(task => {
        if (task.id === taskID){
          return {
            ...task,
            completed: !task.completed,
          };
        }
      return task;
      })
    })
  };

  clearComplete = () => {
    this.setState({
      todo: this.state.todo.filter(task => !task.completed)
    })
  };


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}/>
        <TodoList 
          todo={this.state.todo}
          toggleComplete={this.toggleComplete}
          clearComplete={this.clearComplete}
        />
      </div>
    );
  }
}

export default App;
