import React from "react";
import style from "./UserInfo.module.css";

const UserInfo = ({
  lookingForAJobDescription,
  lookingForAJob,
  name,
  aboutMe,
  contacts
}) => {

  return (
    <div className={style.info}>
      
      <p>Looking for a job {lookingForAJob ? 'yes' : 'no'}</p>
      <span>{lookingForAJob ? lookingForAJobDescription : null}</span>
      <p>About me: {aboutMe}</p>
      {Object.keys(contacts).map((key)=>{
        return <Contacts key={key} contact={key} value={contacts.key}/>
      })}
    </div>
  );
};
export default UserInfo;
const Contacts = ({contact, value}) => {
return <p>{contact}:{value}</p>
}