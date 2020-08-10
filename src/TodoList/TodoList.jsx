import React from 'react';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {posts: []};
  }

  componentDidMount() {
    console.log('Make api')
    //Using Promise
    //Pyramid of promise
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
      //Geting user id of first todo
      const firstUserId = data[0].userId;

      //Making api to get posts of first user id
      fetch('https://jsonplaceholder.typicode.com/posts?userId='+firstUserId)
      .then(response => response.json())
      .then(data => this.setState({posts: data}))

      // You can also write
      // `https://jsonplaceholder.typicode.com/posts?userId=${firstUserId}` -> ${firstUserId} -> string interpolation
    });
    console.log(this.state.posts);
    console.log('API done');
  }

  render() {
    return (
      <div className="list">
        {this.state.posts.length === 0 && <div> Loading posts....</div> }
        { this.state.posts.map(todo => <div key={todo.id} className="post-data">
          <div>{todo.title}</div>
        </div> )}
      </div>
    )
  }

}

export default TodoList;