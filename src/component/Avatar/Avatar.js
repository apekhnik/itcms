import React, { useState } from "react";
import style from "./Avatar.module.css";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Avatar = ({ src, size, isOwner, loadPhoto, savePhoto }) => {
  const [newAva, setNewava] = useState('')
  
  const imgSize = size === "min" ? { width: "70px", height: "70px" } : {};
  const setNewPhoto = (e) => {
    if (e.target.files.length) {
      setNewava(e.target.files[0])
      // props.savePhoto(e.target.files[0]);
    }
  };
  const chouse = <div className={style.inputBlock}>
    <input type="file" name="file" id="file" onChange={setNewPhoto} className={style.inputfile}/> 
    <label for="file">Choose a file</label>
  </div>
  const saveButton = <button onClick={()=>savePhoto(newAva)}className={style.saveButton}>
  <FontAwesomeIcon icon={faUpload} size='2x' />
</button>
  return (
    <div className={style.avatar}>
      <img src={src} alt="" style={imgSize} />
      {isOwner && chouse}
      {newAva&&saveButton}
      
    </div>
  );
};
export default Avatar;
