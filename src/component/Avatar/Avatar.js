import React, { useState } from "react";
import style from "./Avatar.module.css";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Avatar = ({ src, size, isOwner, loadPhoto, savePhoto }) => {
  const [newAva, setNewava] = useState("");

  const imgSize = size === "min" ? { width: "70px", height: "70px" } : {};
  const setNewPhoto = (e) => {
    if (e.target.files.length) {
      setNewava(e.target.files[0]);
      // props.savePhoto(e.target.files[0]);
    }
  };
  const saveButton = (
    <button onClick={() => savePhoto(newAva)} className={style.saveButton}>
      <FontAwesomeIcon icon={faUpload} size="1.5x" color='white'/>
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
      <img src={src} alt="" style={imgSize} />

      <div className={style.avatarEdit}>
        {isOwner && chouse}
        
      </div>
    </div>
  );
};
export default Avatar;
