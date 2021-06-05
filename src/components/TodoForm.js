import React from 'react';

class TodoForm extends React.Component {
    
    state = {
        task: '',
    }

    render() {
        return (
            <div>
                <h3>Add things to do:</h3>
                <form>
                    <input 
                        type='text'
                        onChange={}
                        value={this.state.task}
                    />
                </form>
            </div>
        )
    }
}

export default TodoForm;