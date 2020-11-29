import React from "react";
import style from "./UserInfo.module.css";
type UserInfoPropsType = {
  lookingForAJobDescription: string
  lookingForAJob: boolean
  name: string
  aboutMe: string
  contacts: string
}
const UserInfo:React.FC<UserInfoPropsType> = ({
  lookingForAJobDescription,
  lookingForAJob,
  name,
  aboutMe,
  contacts,
}) => {
  return (
    <div className={style.info}>
      <Contacts
        contact="В поисках работы"
        value={lookingForAJob ? "Yes" : "No"}
      />
      <Contacts contact="Подробности" value={lookingForAJobDescription} />
      <Contacts contact="Обо мне" value={aboutMe} />

      {Object.entries(contacts).map((arr) => (
        <Contacts key={arr[0]} contact={arr[0]} value={arr[1]} />
      ))}
    </div>
  );
};
export default UserInfo;
type ContactsPropsType = {
  contact:string 
  value :string
}
const Contacts:React.FC<ContactsPropsType> = ({ contact, value }) => {
  return (
    <div className={style.contactDiv}>
      <span>{contact}:</span> <p>{value}</p>
    </div>
  );
};
