import React from "react";
import {  reduxForm, InjectedFormProps } from "redux-form";
import {
  FormInput,
  createField,
  FormInputCheck
} from "../../forms/form-controls/Textarea";
import style from "./Profile.module.css";
import {ProfileType} from '../../redux/reducers/profilePageReducer'
type MapPropstype = {
  profile: ProfileType
}
type MapDispatchPropstype = {
  onSubmit: (data:any)=>void
}
export const ProfileDataChangePage:React.FC<MapPropstype&MapDispatchPropstype> = ({onSubmit, profile}) => {
  
  
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

type DataFormType = {
  handleSubmit?:()=>void
  profile: ProfileType
}
const ProfileDataForm:React.FC<InjectedFormProps<ProfileType,DataFormType>&DataFormType> = (props) => {
  
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

const ProfileDataReduxForm = reduxForm<ProfileType,DataFormType>({ form: "profileData" })(
  ProfileDataForm
);
export default ProfileDataChangePage;
