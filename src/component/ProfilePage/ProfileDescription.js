import React, { useState } from "react";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import ProfileDataChangePage from "./ProfileDataForm";
import UserInfo from "../UserInfo/UserInfo";
import style from './Profile.module.css'
const ProfileDescription = (props) => {
  const [isEdit, setisEdit] = useState(false);
  const onSubmit = (data) => {
    props.saveProfile(data);
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
          aboutMe={props.profile.aboutMe}
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
