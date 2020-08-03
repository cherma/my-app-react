import React from 'react';
import InputArea from '../InputArea';
import Banner from '../Banner';

class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: '', loading: true };
  }

  componentWillMount() {
    console.log('Mounting Initiated');
  }

  componentDidMount() {
    console.log('Mounting done');
    setTimeout(()=>this.setState({ loading: false }), 2000);
  }

  componentDidUpdate() {
    console.log('updation done');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('should update',nextProps, nextState);
    if(nextState.value === '12')
      return false;
    return true;
  }

  updateValue = (newValue) => {
    this.setState({ value: newValue})
  }

  render() {
    return(
      <React.Fragment>
        {this.state.loading ?
        'Loading...' :
        <React.Fragment>  
          <InputArea onDataChange={(newValue) => this.updateValue(newValue)} />
          <Banner text={this.state.value} /> 
        </React.Fragment>
    }
      </React.Fragment>
    )
  }
};

export default Content;