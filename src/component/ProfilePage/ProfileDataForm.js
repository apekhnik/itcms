import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  FormInput,
  Textarea,
  createField,
  FormInputCheck
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
      
      {createField(FormInput, "text", "Enter your name", "fullName", [], "", 'Имя')}
      
      {createField(FormInputCheck, "checkbox", "lookingForAJob", "lookingForAJob", [], "check",'Looking for a job')}
      
      
      {createField(FormInput, "text", "LookingForAJobDescription", "lookingForAJobDescription", [], "", 'О поиске работы')}
      {createField(FormInput, "text", "About me", "aboutMe", [], "", 'About me')}
      <button>++</button>
      {Object.keys(props.profile.contacts).map((key)=>{
        return createField(FormInput, "text", 'contacts.'+ key, 'contacts.'+ key, [], "", key)
      })}
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "profileData" })(
  ProfileDataForm
);
export default ProfileDataChangePage;
