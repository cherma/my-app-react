import React from 'react';
import './App.css';
import Nav from './Nav';
import Content from './Content';
import TodoList from './TodoList';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Content />
      <TodoList/>
    </div>
  );
}

export default App;
