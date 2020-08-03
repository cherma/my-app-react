import React from 'react';

class InputArea extends React.Component {

  constructor(props){
    super(props);
    this.state = {value: ''};
  }

  changeHandler(event) {
    this.setState({ value: event.target.value },()=>{
      console.log('Callback', this.state.value);
    });
    console.log('Next to setState', this.state.value);
  }

  render() {
    console.log('Inside Render', this.state.value);
    return (
      <div className="input-area">
        <input onChange={(event) => this.changeHandler(event)} />
      </div>
    )
  }

}

export default InputArea;
