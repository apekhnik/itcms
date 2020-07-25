import React, {Component} from "react";
import Account from "../Account/Account";
import PostContainer from "../Posts/PostContainer";
import * as axios from 'axios'
import { connect } from "react-redux";

class ProfilePageContainer extends Component{
  componentDidMount(){
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/2`
      )
      .then((response) => {
        this.props.setProfile(response.data)
      })
      .catch((e) => console.error(e));
  }
  render(){
    console.log(this.props)
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
const ProfilePage = connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainer)
export default ProfilePage;
