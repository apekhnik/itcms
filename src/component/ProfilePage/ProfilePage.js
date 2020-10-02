import React, { Component } from "react";
import Account from "../Account/Account";
import PostContainer from "../Posts/PostContainer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  setProfile,
  getStatus,
  updateStatus,
  inputUserStatusChange,
} from "../../redux/reducers/profilePageReducer";
import { withAuthRedirect } from "../../HOC/AuthRedirect";
import { compose } from "redux";
class ProfilePageContainer extends Component {
  componentDidMount() {
    let id = this.props.match.params.userID || this.props.autorizedId;
    if (!this.props.autorizedId) this.props.history.push("/login");
    this.props.setProfile(id);
    this.props.getStatus(id);
  }

  render() {
    return (
      <div>
        <Account {...this.props} />
        <PostContainer store={this.props.store} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
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
  }),
  withRouter,
  withAuthRedirect
)(ProfilePageContainer);
