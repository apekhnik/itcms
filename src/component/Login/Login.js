import React from "react";
import { userLogin } from "../../redux/reducers/authReducer";
import { Field, reduxForm } from "redux-form";
import { FormInput, createField } from "../../forms/form-controls/Textarea";
import style from "./Login.module.css";
import { connect } from "react-redux";
import { required } from "../../forms/form-validator/validator";
import { Redirect } from "react-router-dom";
const Login = ({ userLogin, isAuth, captcha }) => {
  const onSubmit = (data) => {
    userLogin(data);
  };

  if (isAuth) return <Redirect to="/profile" />;
  return (
    <div style={{ textAlign: "center" }}>
      <h1>LOGIN</h1>
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
    "text",
    "Password",
    "password",
    [required],
    "",
    "Password"
  );
  return (
    <form className={style.loginForm} onSubmit={props.handleSubmit}>
      {login}
      {password}

      {props.captcha && <img src={props.captcha} />}
      {props.captcha && antiBot}

      <div>
        <Field component={"input"} type={"checkbox"} name={"rememberMe"} />{" "}
        remember me
      </div>
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
