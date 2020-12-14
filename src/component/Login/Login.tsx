import React from "react";
import { userLogin } from "../../redux/reducers/authReducer";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
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
import { LoginData } from '../../redux/reducers/authReducer'
import { AppstateType } from '../../redux/store'
// type PropsType = {
//   userLogin:(data:LoginData)=>void,
//   isAuth:boolean
//   captcha: string
// }
const Login: React.FC<MapStatePropsType & MapDispatchType> = ({ userLogin, isAuth, captcha }) => {
  const onSubmit = (data: LoginData) => {
    userLogin(data);
  };

  if (isAuth) return <Redirect to="/profile" />;
  return (
    <div className={style.loginPage}>

      <LoginReduxForm onSubmit={onSubmit} captcha={captcha} />
    </div>
  );
};
type LoginFormOwnProps = {
  captcha: string | null
}
type LoginFormField = Extract<keyof LoginData, string>
const LoginForm: React.FC<InjectedFormProps<LoginData, LoginFormOwnProps> & LoginFormOwnProps> = (props) => {
  const antiBot = createField<LoginFormField>(
    FormInput,
    "text",
    "Anti-bot",
    "captcha",
    [required],
    "",
    ""
  );
  const rememberMe = createField<LoginFormField>(
    FormInputCheck,
    "checkbox",
    "",
    "rememberMe",
    [],
    "check",
    "Запомнить меня"
  );
  const login = createField<LoginFormField>(
    FormInput,
    "text",
    "Login",
    "email",
    [required],
    "",
    "Login"
  );
  const password = createField<LoginFormField>(
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
      <Tooltip content="hui" position="top">
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
type MapStatePropsType = {
  isAuth: boolean
  captcha: string
}
type MapDispatchType = {
  userLogin: (data: LoginData) => void
}
const mapStateToProps = (state: AppstateType) => ({
  isAuth: state.auth.isAuth,
  captcha: state.auth.captcha,
});
const LoginReduxForm = reduxForm<LoginData, LoginFormOwnProps>({ form: "login" })(LoginForm);
//@ts-ignore
export default connect(mapStateToProps, { userLogin })(Login);
