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
  const chouse = <div >
    <input type="file" name="file" id="file" onChange={setNewPhoto} className={style.inputfile}/> 
    <label for="file">Choose a file</label>
    <button onClick={()=>savePhoto(newAva)}className={style.saveButton}>
        <FontAwesomeIcon icon={faSave} size='2x' />
    </button>
  </div>
  return (
    <div className={style.avatar}>
      <img src={src} alt="" style={imgSize} />
      {isOwner && chouse}
      
      
    </div>
  );
};
export default Avatar;
