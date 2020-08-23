import React from "react";
import classes from "classnames";
import style from "./Textarea.module.css";
const Textarea = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning },
}) => {
  const hasError = touched && error ? <span>{error}</span> : null;
  const cl = classes(style.textareaControl, hasError ? style.error : "");

  return (
    <div className={cl}>
      <input {...input} placeholder={placeholder} type={type} />
      <div>{hasError}</div>
    </div>
  );
};
export default Textarea;
