import React from 'react';
import './App.css';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';

const App = () => {
  return (
    <div className="App">
      <FunctionalComponent data={1} />
      <FunctionalComponent data={2} />
      <FunctionalComponent data={3} />
      <br />
      <br />
      <br />
      <ClassComponent />
    </div>
  );
}

export default App;
