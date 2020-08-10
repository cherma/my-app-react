import React from 'react';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {todos: []};
  }

  componentDidMount() {
    console.log('Make api')
    //Using Promise
    //Pyramid of promise
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
      this.setState({todos: data})
    });
    console.log(this.state.todos);
    console.log('API done');
  }

  render() {
    return (
      <div className="list">
        {this.state.todos.length === 0 && <div> Loading todos....</div> }
        { this.state.todos.map(todo => <div key={todo.id} className="todo-item">{todo.title}</div> )}
      </div>
    )
  }

}

export default TodoList;