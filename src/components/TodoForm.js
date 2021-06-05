import React from 'react';

class TodoForm extends React.Component {
    
    state = {
        task: '',
    }

    handleChange = e => {
        this.setState({
            task: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.task)
    }

    render() {
        return (
            <div>
                <h3>Add things to do:</h3>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        placeholder='Add new task'
                        onChange={this.handleChange}
                        value={this.state.task}
                    />
                    <button>Add Task</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;