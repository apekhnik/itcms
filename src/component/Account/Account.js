import React, {useState} from "react";
import Avatar from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import style from "./Account.module.css";
import Loader from "../Loader/Lodaer";
import ProfileStatus from '../ProfileStatus/ProfileStatus'
import ProfileDataForm from '../ProfilePage/ProfileDataForm'
const Account = (props) => {
  const [editMode, setEditMode] = useState(false)
  const loadPhoto = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const fakeAva =
    "https://cs10.pikabu.ru/post_img/big/2018/03/18/1/1521324516155263949.png";
  if (!props.profile) return <Loader />;
  
  const ava = props.profile.photos.large || fakeAva;

  return (
    <div className={style.profile}>
      <Avatar src={ava} isOwner={props.isOwner} loadPhoto={loadPhoto} savePhoto={props.savePhoto}/>
      {/* <div>
          {props.isOwner && <input type="file" onChange={loadPhoto} />}
      </div> */}
      
      <ProfileStatus
        status={props.status}
        updateStatus={props.updateStatus}
        inputUserStatusChange={props.inputUserStatusChange}
      />
      <button onClick={()=>setEditMode(!editMode)}>{editMode ? 'save': 'edit'}</button>
      {editMode ? <ProfileDataForm/> :       <UserInfo
        name={props.profile.fullName}
        lookingForAJob={props.profile.lookingForAJob}
        lookingForAJobDescription={props.profile.lookingForAJobDescription}
        aboutMe={props.profile.aboutMe}
        contacts={props.profile.contacts}
      />}

    </div>
  );
};
export default Account;
