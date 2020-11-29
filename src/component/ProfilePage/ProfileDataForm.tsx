import React from "react";
import {  reduxForm } from "redux-form";
import {
  FormInput,
  createField,
  FormInputCheck
} from "../../forms/form-controls/Textarea";
import style from "./Profile.module.css";
import {ProfileType} from '../../redux/reducers/profilePageReducer'
type Propstype = {
  profile: ProfileType
  onSubmit: (data:any)=>void
}
export const ProfileDataChangePage:React.FC<Propstype> = ({onSubmit, profile}) => {
  
  
  return (
    <div>
      <ProfileDataReduxForm
        onSubmit={onSubmit}
        initialValues={profile}
        //@ts-ignore
        profile={profile}
      />
    </div>
  );
};

type DataFormType = {
  handleSubmit:()=>void
  profile: ProfileType
}
const ProfileDataForm:React.FC<DataFormType> = (props) => {
  
  return (
    <form onSubmit={props.handleSubmit} className={style.profileChangeForm}>
      {createField(FormInput, "text", "Enter your name", "fullName", [], "", 'Имя')}
      {createField(FormInputCheck, "checkbox", "lookingForAJob", "lookingForAJob", [], "check",'Looking for a job')}
      {createField(FormInput, "text", "LookingForAJobDescription", "lookingForAJobDescription", [], "", 'О поиске работы')}
      {createField(FormInput, "text", "About me", "aboutMe", [], "", 'About me')}
      
      <button>Save</button>
      {Object.keys(props.profile.contacts).map((key)=>{
        return createField(FormInput, "text", 'contacts.'+ key, 'contacts.'+ key, [], "", key)
      })}
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "profileData" })(
  //@ts-ignore
  ProfileDataForm
);
export default ProfileDataChangePage;
