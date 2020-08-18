import React from "react";
import { userLogin, userLogout } from "../../redux/reducers/authReducer";
import { Field, reduxForm } from "redux-form";
import style from "./Login.module.css";
import { connect } from "react-redux";
const Login = ({ userLogin, userLogout }) => {
  const onSubmit = (data) => {
    userLogin(data);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
      <button onClick={userLogout}>LOGOUT</button>
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <form className={style.loginForm} onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"login"} component={"input"} name={"email"} />
      </div>
      <div>
        <Field placeholder={"password"} component={"input"} name={"password"} />
      </div>
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
const mapStateToProps = (state) => {
  return {};
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
export default connect(mapStateToProps, { userLogin, userLogout })(Login);
