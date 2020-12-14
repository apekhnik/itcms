import React, { ReactNode } from "react";
import classes from "classnames";
import style from "./Textarea.module.css";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field } from "redux-form";
import Tooltip from "../../component/Tooltip/Tooltip";
import {FieldValidatorType} from '../form-validator/validator'
type TextareaType = {
  input:string
  placeholder:string
  type:string
  meta: { touched:boolean, error:string, warning:string },
}
export const Textarea:React.FC<TextareaType> = ({
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

export function createField<FieldNameType extends string>(
  component:ReactNode,
  type:string,
  placeholder:string,
  name:FieldNameType,
  validate:Array<FieldValidatorType>,
  className:string,
  label:ReactNode
) {
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
type FormInputType = {
  input:string
  placeholder:string
  type:string
  className:string
  name:string
  label:string
  meta: { touched:boolean, error:string, warning:string }
}
export const FormInput:React.FC<FormInputType> = ({
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
export const FormInputCheck:React.FC<FormInputType>  = ({
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
