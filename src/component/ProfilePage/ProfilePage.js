import React from "react";
import Account from "../Account/Account";
import PostContainer from "../Posts/PostContainer";

const ProfilePage = ({ store }) => {
  return (
    <div>
      <Account />
      <PostContainer store={store} />
    </div>
  );
};
export default ProfilePage;
