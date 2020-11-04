import React from "react";
import style from "./UserInfo.module.css";

const UserInfo = ({
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
const Contacts = ({ contact, value }) => {
  return (
    <div className={style.contactDiv}>
      <span>{contact}:</span> <p>{value}</p>
    </div>
  );
};
