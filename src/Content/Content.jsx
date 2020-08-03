import React from 'react';
import InputArea from '../InputArea';
import Banner from '../Banner';

class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  updateValue = (newValue) => {
    this.setState({ value: newValue})
  }

  render() {
    return(
      <React.Fragment>
      <InputArea onDataChange={(newValue) => this.updateValue(newValue)} />
      <Banner text={this.state.value} />
      </React.Fragment>
    )
  }
};

export default Content;