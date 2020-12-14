import React, { useEffect } from "react";
import Account, { FileType } from "../Account/Account";
import PostContainer from "../Posts/PostContainer";
import { AppstateType } from '../../redux/store'
import { connect } from "react-redux";
import style from './Profile.module.css'
import { withRouter } from "react-router-dom";
import {
  setProfile,
  getStatus,
  updateStatus,
  inputUserStatusChange,
  savePhoto,
  saveProfile,
  ProfileType
} from "../../redux/reducers/profilePageReducer";
import { RouteComponentProps } from 'react-router-dom';
import { withAuthRedirect } from "../../HOC/AuthRedirect";
import { compose } from "redux";

interface ChildComponentProps extends RouteComponentProps<any> {
  autorizedId: number
  profile: ProfileType
  status: string
  setProfile: (id: number) => void
  getStatus: (id: number) => void
  updateStatus: (status: string) => void
  inputUserStatusChange: (status: string) => void
  savePhoto: (file: FileType) => void
}
const ProfilePageContainer: React.FC<ChildComponentProps> = (props) => {
  useEffect(() => {
    let id = props.match.params.userID || props.autorizedId;
    if (!props.autorizedId) props.history.push("/login");
    props.setProfile(id);
    props.getStatus(id);
  }, [])
  return (
    <div className={style.profilePage}>
      <Account savePhoto={props.savePhoto} inputUserStatusChange={props.inputUserStatusChange} status={props.status} updateStatus={props.updateStatus} profile={props.profile} isOwner={!props.match.params.userID} />
      <PostContainer />
    </div>
  );
}

const mapStateToProps = (state: AppstateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  autorizedId: state.auth.id,
});
// type MapStateType = {
//   profile: ProfileType | null
//   status: string
//   autorizedId: number | null
// }
// type MapDispatchType = {
//   setProfile: (id: number) => void
//   getStatus: (id: number) => void
//   updateStatus: (status: string) => void
//   inputUserStatusChange: (status: string) => void
//   savePhoto: (file: FileType) => void
//   saveProfile: (profile: ProfileType) => void
// }
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
