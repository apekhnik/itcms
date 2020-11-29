import React, { useState } from "react";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import ProfileDataChangePage from "./ProfileDataForm";
import UserInfo from "../UserInfo/UserInfo";
import style from './Profile.module.css'
import {ProfileType} from '../../redux/reducers/profilePageReducer'
type PropsType = {
  saveProfile:(data:any)=>void
  profile: ProfileType
  status: string
  updateStatus:(status: string)=>void
  inputUserStatusChange:(status: string)=>void
}
const ProfileDescription:React.FC<PropsType> = (props) => {
  const [isEdit, setisEdit] = useState(false);
  const onSubmit = (data:any) => {
    props.saveProfile(data)
    setisEdit(false)
  };
  const editBtn = <button onClick={() => setisEdit(!isEdit)}>
  {isEdit ? "save" : "edit"}
  </button>
  
  return (
    <div className={style.profileDescription}>
    <h1>{props.profile.fullName}</h1>
      <ProfileStatus
        status={props.status}
        updateStatus={props.updateStatus}
        inputUserStatusChange={props.inputUserStatusChange}
      />
      <hr/>
      {isEdit ? (
        <ProfileDataChangePage profile={props.profile}  onSubmit={onSubmit}/>
      ) : (
        <UserInfo
          name={props.profile.fullName}
          lookingForAJob={props.profile.lookingForAJob}
          lookingForAJobDescription={props.profile.lookingForAJobDescription}
          //@ts-ignore
          aboutMe={props.profile.aboutMe}
          //@ts-ignore
          contacts={props.profile.contacts}
        />
      )}
      {
        !isEdit && editBtn
      }
    </div>
  );
};
export default ProfileDescription;
