import React from "react";
import Account from "../Account/Account";
import Posts from "../Posts/Posts";
import Post from "../Posts/Post";
const Profile = () => {
  return (
    <div>
      <Account />
      <Posts>
        <Post text="test test" />
        <Post text="test test" />
      </Posts>
    </div>
  );
};
export default Profile;
