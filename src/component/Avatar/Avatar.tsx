import React, { useState } from "react";
import style from "./Avatar.module.css";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FileType } from "../Account/Account";
type PropsType = {
  src: string | null
  size?: string
  isOwner?: boolean
  loadPhoto?: (file: FileType) => void
  savePhoto?: (newAva: any) => void
}
const Avatar: React.FC<PropsType> = ({ src, size, isOwner, loadPhoto, savePhoto }) => {
  const [newAva, setNewava] = useState("");

  const imgSize = size === "min" ? { width: "90px", height: "120px" } : {};
  const setNewPhoto = (e: any) => {
    if (e.target.files.length) {
      setNewava(e.target.files[0]);
      console.log(e.target.files[0])
      // props.savePhoto(e.target.files[0]);
    }
  };
  let src1 = src ? src : ''
  const saveButton = (
    // @ts-ignore
    <button onClick={() => savePhoto(newAva)} className={style.saveButton}>
      <FontAwesomeIcon icon={faUpload} size="1x" color='white' />
    </button>
  );
  const chouse = (
    <div className={style.inputBlock}>
      <input
        type="file"
        name="file"
        id="file"
        onChange={setNewPhoto}
        className={style.inputfile}
      />
      <label htmlFor="file">Обновить фотографию</label>
      {newAva && saveButton}
    </div>
  );

  return (
    <div className={style.avatar}>
      <img src={src1} alt="" />
      <div className={style.avatarEdit}>
        {isOwner && chouse}
      </div>
    </div>
  );
};
export default Avatar;
