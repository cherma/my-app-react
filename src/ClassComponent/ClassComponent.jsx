import React from 'react';

class ClassComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { counter: 1 };
  }

  addValue = () => {
    const newValue = this.state.counter + 1;
    this.setState({ counter: newValue});
  };

  render() {
    return (
      <div className="class-component">
        <div className="class-component--number-holder">
          {this.state.counter}
        </div>
        <div className="class-component--btn">
          <button onClick={this.addValue}> Add </button>
        </div>
      </div>
    )
  }
}

export default ClassComponent;

