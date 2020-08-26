import React from "react";
import { userLogin } from "../../redux/reducers/authReducer";
import { Field, reduxForm } from "redux-form";
import { FormInput } from "../../forms/form-controls/Textarea";
import style from "./Login.module.css";
import { connect } from "react-redux";
import { required } from "../../forms/form-validator/validator";
import { Redirect } from "react-router-dom";
const Login = ({ userLogin, isAuth }) => {
  const onSubmit = (data) => {
    userLogin(data);
  };
  if (isAuth) return <Redirect to="/profile" />;
  return (
    <div style={{ textAlign: "center" }}>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <form className={style.loginForm} onSubmit={props.handleSubmit}>
      <Field
        placeholder={"login"}
        component={FormInput}
        name={"email"}
        validate={[required]}
        className={style.loginForm_input}
      />

      <Field
        placeholder={"password"}
        component={FormInput}
        name={"password"}
        type={"password"}
        validate={[required]}
        className={style.loginForm_input}
      />

      <div>
        <Field component={"input"} type={"checkbox"} name={"rememberMe"} />{" "}
        remember me
      </div>
      <div>
        <button>Click</button>
      </div>
    </form>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
export default connect(mapStateToProps, { userLogin })(Login);
