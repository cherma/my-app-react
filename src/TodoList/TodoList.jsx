import React from 'react';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {todos: []};
  }

  componentDidMount = async () => { //Parent function needs to be have async keyword it you have await in it
    //using await
    const makeApi = async () => { //Since its another seperate function making api, we need async
      console.log('Make API initiated');

      //await to finish api and return data
      const todos = await fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json());
      console.log('API Done', todos);
      return todos;
    };

    const todos = await makeApi(); //await used to make actions sync, 
                                  //remove await n you'll see error saying todo is not iteratable
    this.setState({ todos: [...todos]});
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