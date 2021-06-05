import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

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


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}/>
        <TodoList />
      </div>
    );
  }
}

export default App;
