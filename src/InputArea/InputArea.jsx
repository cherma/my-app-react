import React from 'react';

const InputArea = ({ onDataChange }) => {

  const changeHandler = (event) => {
    onDataChange(event.target.value);
  }

    return (
      <div className="input-area">
        <input onChange={(event) => changeHandler(event)} />
      </div>
    )

}

export default InputArea;