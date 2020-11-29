import React, { Component, useEffect } from "react";
import Account from "../Account/Account";
import PostContainer from "../Posts/PostContainer";
import {AppstateType} from '../../redux/store'
import { connect } from "react-redux";
import style from './Profile.module.css'
import { withRouter } from "react-router-dom";
import {
  setProfile,
  getStatus,
  updateStatus,
  inputUserStatusChange,
  savePhoto,
  saveProfile
} from "../../redux/reducers/profilePageReducer";
import { RouteComponentProps } from 'react-router-dom';
import { withAuthRedirect } from "../../HOC/AuthRedirect";
import { compose } from "redux";

interface ChildComponentProps extends RouteComponentProps<any> {
  autorizedId: number
  setProfile:(id:number)=>void
  getStatus:(id:number)=>void
}
const ProfilePageContainer:React.FC<ChildComponentProps> = (props) => {
  useEffect(()=>{
    let id = props.match.params.userID || props.autorizedId;
    if (!props.autorizedId) props.history.push("/login");
    props.setProfile(id);
    props.getStatus(id);
  },[])
  return (
    <div className={style.profilePage}>
      <Account {...props} isOwner={!props.match.params.userID} />
      <PostContainer  />
    </div>
  );
}

const mapStateToProps = (state:AppstateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  autorizedId: state.auth.id,
});

export default compose(
  connect(mapStateToProps, {
    setProfile,
    getStatus,
    updateStatus,
    inputUserStatusChange,
    savePhoto,
    saveProfile
  }),
  withRouter,
  withAuthRedirect
)(ProfilePageContainer);
