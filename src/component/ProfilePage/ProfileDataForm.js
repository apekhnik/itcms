import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  FormInput,
  Textarea,
  createField,
} from "../../forms/form-controls/Textarea";
import style from "./Profile.module.css";
export const ProfileDataChangePage = (props) => {
  
  const onSubmit = (data) => {
    console.log(data)
    
    props.saveProfile(data);
  };
  return (
    <div>
      <h3>Profile Form</h3>
      <ProfileDataReduxForm
        onSubmit={onSubmit}
        initialValues={props.profile}
        profile={props.profile}
      />
    </div>
  );
};
const ProfileDataForm = (props) => {
  
  return (
    <form onSubmit={props.handleSubmit} className={style.profileChangeForm}>
      Full name{createField(FormInput, "text", "Enter your name", "fullName", [], "")}
      Looking for a job{createField(FormInput, "checkbox", "lookingForAJob", "lookingForAJob", [], "")}
      {createField(FormInput, "text", "LookingForAJobDescription", "lookingForAJobDescription", [], "")}
      {createField(FormInput, "text", "About me", "aboutMe", [], "")}
  
      <button>++</button>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "profileData" })(
  ProfileDataForm
);
export default ProfileDataChangePage;
