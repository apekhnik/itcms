import React from "react";

const Input = ({ textChangeHandler, inputValue, send }) => {
  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
      >
        <input type="text" onChange={textChangeHandler} value={inputValue} />
      </form>
    </div>
  );
};
export default Input;
