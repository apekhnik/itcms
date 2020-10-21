import React, { useState } from "react";
import style from "./Avatar.module.css";
import { faSave } from "@fortawesome/free-solid-svg-icons";
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
  const chouse = <div>
    <input type="file" name="file" id="file" onChange={setNewPhoto} className={style.inputfile}/> 
    <label for="file">Choose a file</label>
  </div>
  return (
    <div className={style.avatar}>
      <img src={src} alt="" style={imgSize} />
      {isOwner && chouse}
      <FontAwesomeIcon icon={faSave} />
      <button onClick={()=>savePhoto(newAva)}>SAVE PHOTO</button>
    </div>
  );
};
export default Avatar;
