import React from 'react';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {posts: []};
  }

  componentDidMount = async () => { //Parent function needs to be have async keyword it you have await in it
    //using await
    const makeApi = async () => { //Since its another seperate function making api, we need async
      console.log('Make API initiated');

      //await to finish api and return data
      const todos = await fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json());
      console.log('API Done', todos);
      const firstUserId= todos[0].userId;
      const posts =await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${firstUserId}`).then(response => response.json());

      return posts;
    };

    const posts = await makeApi(); //await used to make actions sync, 
                                  //remove await n you'll see error saying todo is not iteratable
    this.setState({ posts: [...posts]});
  }

  render() {
    return (
      <div className="list">
        {this.state.posts.length === 0 && <div> Loading posts....</div> }
        { this.state.posts.map(post => <div key={post.id} className="post-item">{post.title}</div> )}
      </div>
    )
  }

}

export default TodoList;