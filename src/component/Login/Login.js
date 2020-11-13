import React from "react";
import { userLogin } from "../../redux/reducers/authReducer";
import { Field, reduxForm } from "redux-form";
import {
  FormInput,
  createField,
  FormInputCheck,
} from "../../forms/form-controls/Textarea";
import style from "./Login.module.css";
import { connect } from "react-redux";
import { required } from "../../forms/form-validator/validator";
import { Redirect } from "react-router-dom";
import Tooltip from "../Tooltip/Tooltip";
const Login = ({ userLogin, isAuth, captcha }) => {
  const onSubmit = (data) => {
    userLogin(data);
  };

  if (isAuth) return <Redirect to="/profile" />;
  return (
    <div className={style.loginPage}>
      <LoginReduxForm onSubmit={onSubmit} captcha={captcha} />
    </div>
  );
};

const LoginForm = (props) => {
  const antiBot = createField(
    FormInput,
    "text",
    "Anti-bot",
    "captcha",
    [required],
    "",
    ""
  );
  const rememberMe = createField(
    FormInputCheck,
    "checkbox",
    "",
    "rememberMe",
    [],
    "check",
    "Запомнить меня"
  );
  const login = createField(
    FormInput,
    "text",
    "Login",
    "email",
    [required],
    "",
    "Login"
  );
  const password = createField(
    FormInput,
    "password",
    "Password",
    "password",
    [required],
    "",
    "Password"
  );
  return (
    <form className={style.loginForm} onSubmit={props.handleSubmit}>
      <Tooltip content="hui" position="left">
        <h2>Авторизация</h2>
      </Tooltip>
      {login}
      {password}
      {props.captcha && <img src={props.captcha} />}
      {props.captcha && antiBot}
      {rememberMe}
      <div>
        <button>Click</button>
      </div>
      {props.error && (
        <div style={{ color: "red" }}>
          <h3>wrong email or password</h3>
        </div>
      )}
    </form>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captcha: state.auth.captcha,
});
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
export default connect(mapStateToProps, { userLogin })(Login);
