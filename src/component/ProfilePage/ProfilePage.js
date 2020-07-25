import React, {Component} from "react";
import Account from "../Account/Account";
import PostContainer from "../Posts/PostContainer";
import * as axios from 'axios'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ProfilePageContainer extends Component{
  componentDidMount(){
    let id = this.props.match.params.userID || 2
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${id}`
      )
      .then((response) => {
        this.props.setProfile(response.data)
      })
      .catch((e) => console.error(e));
  }
  render(){
    
    return (
      <div>
        <Account {...this.props}/>
        <PostContainer store={this.props.store} />
      </div>
    );
  }
};
const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setProfile: user => dispatch({type:'SET_CURRENT_PROFILE', payload: user})
  }
}
const ProfilePage = connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfilePageContainer))
export default ProfilePage;
