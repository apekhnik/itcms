import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormInput, Textarea } from "../../forms/form-controls/Textarea";
import style from './Profile.module.css'
export const ProfileDataChangePage = (props) => {
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(props.profile)
  return (
    <div>
      <h3>test test</h3>
      <ProfileDataReduxForm onSubmit={onSubmit} initialValues={props.profile} profile={props.profile}/>
    </div>
  );
};
const ProfileDataForm = (props) => {
  console.log(props)
  return (
    <form onSubmit={props.handleSubmit} className={style.profileChangeForm}>
      <Field
        placeholder={"Full name"}
        component={FormInput}
        name={"fullName"}
        // validate={[required]}
        className=""
      />
      <Field
        placeholder={"Looking for a job"}
        component={FormInput}
        name={"lookingForJob"}
        // validate={[required]}
        className=""
      />
      <Field
        placeholder={"About me"}
        component={Textarea}
        name={"aboutMe"}
        // validate={[required]}
        className=""
      />
      <button>
        ++
      </button>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "profileData" })(
  ProfileDataForm
);
export default ProfileDataChangePage;
