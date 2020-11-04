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
      
      <p>Looking for a job :{lookingForAJob ? 'yes' : 'no'}</p>
      <span>{lookingForAJob ? lookingForAJobDescription : null}</span>
      <p>About me: {aboutMe}</p>
      
      {
        Object.entries(contacts).map((arr)=><Contacts key={arr[0]} contact={arr[0]} value={arr[1]}/>)
      }
    </div>
  );
};
export default UserInfo;
const Contacts = ({contact, value}) => {

return <div>
  <span>{contact}</span> : <p>{value}</p>
</div>
}