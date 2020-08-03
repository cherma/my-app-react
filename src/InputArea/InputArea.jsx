import React from 'react';

const InputArea = ({ onDataChange }) => {

  const changeHandler = (event) => {
    console.log('in')
    onDataChange(event.target.value);
    console.log('out')
  }

    return (
      <div className="input-area">
        <input onChange={(event) => changeHandler(event)} />
      </div>
    )

}

export default InputArea;