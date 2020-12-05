import React from "react";
type Props = {
  textChangeHandler: () => void
  inputValue: number | string
  send: () => void
}
const Input: React.FC<Props> = ({ textChangeHandler, inputValue, send }) => {
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
