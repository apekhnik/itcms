import React, { Component } from "react";
import Account from "../Account/Account";
import PostContainer from "../Posts/PostContainer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setProfile } from "../../redux/reducers/profilePageReducer";
class ProfilePageContainer extends Component {
  componentDidMount() {
    let id = this.props.match.params.userID || 2;
    this.props.setProfile(id);
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
const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
  };
};

const ProfilePage = connect(mapStateToProps, { setProfile })(
  withRouter(ProfilePageContainer)
);
export default ProfilePage;
