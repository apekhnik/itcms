import React from "react";
import Avatar from "../Avatar/Avatar";
import style from "./Account.module.css";
import Loader from "../Loader/Lodaer";
import ProfileDescription from "../ProfilePage/ProfileDescription";
import { ProfileType, saveProfile } from "../../redux/reducers/profilePageReducer";
type PropsType = {
  isOwner: boolean
  savePhoto: (file: FileType) => void
  profile: ProfileType
  status: string
  updateStatus: (status: string) => void
  inputUserStatusChange: (status: string) => void
}
export type FileType = {
  lastModified: number
  lastModifiedDate: string
  name: string
  size: number
  type: string
  webkitRelativePath: string
}
const Account: React.FC<PropsType> = (props) => {
  const loadPhoto = (e: any) => {
    if (e.target.files.length) {
      console.log(e.target.files[0]);
      props.savePhoto(e.target.files[0]);
    }
  };

  const fakeAva =
    "https://cs10.pikabu.ru/post_img/big/2018/03/18/1/1521324516155263949.png";
  if (!props.profile) return <Loader />;

  const ava = props.profile.photos.large || fakeAva;

  return (
    <div className={style.profile}>
      <Avatar
        src={ava}
        isOwner={props.isOwner}
        loadPhoto={loadPhoto}
        savePhoto={props.savePhoto}
      />
      <ProfileDescription saveProfile={saveProfile} profile={props.profile} status={props.status} updateStatus={props.updateStatus} inputUserStatusChange={props.inputUserStatusChange} />
    </div>
  );
};
export default Account;
