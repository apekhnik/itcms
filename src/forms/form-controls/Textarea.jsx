import React from "react";
import classes from "classnames";
import style from "./Textarea.module.css";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field } from "redux-form";
import Tooltip from "../../component/Tooltip/Tooltip";
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

      {hasError}
    </div>
  );
};
export const createField = (
  component,
  type,
  placeholder,
  name,
  validate,
  className,
  label
) => {
  return (
    <Field
      component={component}
      type={type}
      placeholder={placeholder}
      name={name}
      validate={validate}
      className={className}
      label={label}
    />
  );
};
export const FormInput = ({
  input,
  placeholder,
  type,
  className,
  name,
  label,
  meta: { touched, error, warning },
}) => {
  const errorDiv = (
    <div className={style.errorDiv}>
      <Tooltip position="top" content={error} style={{ fontSize: "14px" }}>
        <FontAwesomeIcon icon={faExclamationCircle} />
      </Tooltip>
    </div>
  );

  const hasError = touched && error ? errorDiv : null;
  const cl = classes(style.formControl, hasError ? style.error : "", className);
  const errorSpan = classes(hasError ? style.error1 : "");
  return (
    <div className={cl}>
      <label htmlFor={name}>{label}</label>
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        name={name}
        className={errorSpan}
      />
      {hasError}
    </div>
  );
};
export const FormInputCheck = ({
  input,
  placeholder,
  type,
  className,
  name,
  label,
  meta: { touched, error, warning },
}) => {
  const errorDiv = (
    <div className={style.errorDiv}>
      <FontAwesomeIcon icon={faExclamationCircle} />
      <span>{error}</span>
    </div>
  );
  const hasError = touched && error ? errorDiv : null;
  // const cl = classes( hasError ? style.error : "",className );

  return (
    <div className={style.formControl}>
      <label htmlFor={name}>{label}</label>:
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        name={name}
        className={className}
      />
      <div>{hasError}</div>
    </div>
  );
};
