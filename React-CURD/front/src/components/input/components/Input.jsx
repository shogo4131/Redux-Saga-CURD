import React from 'react';

const Input = React.memo(
  ({ id, placeholder, maxLength, value, handleChange }) => {
    return (
      <>
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          maxLength={maxLength}
          value={value}
          onChange={handleChange}
        />
      </>
    );
  }
);

export default Input;
