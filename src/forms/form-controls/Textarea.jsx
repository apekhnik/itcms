import React from "react";
import classes from "classnames";
import style from "./Textarea.module.css";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field } from "redux-form";
export const Textarea = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning },
}) => {
  const errorDiv = (
    <div className={style.errorDiv}>
      <FontAwesomeIcon icon={faExclamationCircle} />
      <span>{error}</span>
    </div>
  );
  const hasError = touched && error ? errorDiv : null;
  const cl = classes(style.formControl, hasError ? style.error : "");
 
  return (
    <div className={cl}>
      <input {...input} placeholder={placeholder} type={type} />
      <div>{hasError}</div>
    </div>
  );
};
export const createField = (component,type,placeholder, name, validate, className) =>{ 
  return <Field
    component={component}
    type={type}
    placeholder={placeholder}
    name={name}
    validate={validate}
    className={className}
  />
}
export const FormInput = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning },
}) => {
  const errorDiv = (
    <div className={style.errorDiv}>
      <FontAwesomeIcon icon={faExclamationCircle} />
      <span>{error}</span>
    </div>
  );
  const hasError = touched && error ? errorDiv : null;
  const cl = classes(style.formControl, hasError ? style.error : "");

  return (
    <div className={cl}>
      <input {...input} placeholder={placeholder} type={type} />
      <div>{hasError}</div>
    </div>
    // <FormControls
    //   className={cl}
    //   hasError={hasError}
    //   {...input}
    //   placeholder={placeholder}
    // />
  );
};
// const FormControls = (props) => {
//   return (
//     <div className={props.className}>
//       <input {...props.input} placeholder={props.placeholder} />
//       <div>{props.hasError}</div>
//     </div>
//   );
// };
