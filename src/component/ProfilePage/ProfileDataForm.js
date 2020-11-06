import React from "react";
import {  reduxForm } from "redux-form";
import {
  FormInput,
  createField,
  FormInputCheck
} from "../../forms/form-controls/Textarea";
import style from "./Profile.module.css";
export const ProfileDataChangePage = ({onSubmit, profile}) => {
  
  console.log(profile)
  return (
    <div>
      <ProfileDataReduxForm
        onSubmit={onSubmit}
        initialValues={profile}
        profile={profile}
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
