// src/components/Profile.js

import React from "react";
import { useAuth0 } from "../react-auth0-wrapper";
import PictureList from "./PictureList";
import UserInfoDB from "./UserInfoDB";
// import PictureCard from "./PictureCard"

const Profile = props => {
  console.log(props.savedImgs);

  const { loading, user } = useAuth0();
  if (loading || !user) {
    return "Loading...";
  }
  return (
    <div>
      <UserInfoDB
        userId={user.sub}
        BUName={user.nickname}
        BUPicture={user.picture}
      />
      <div>
        <PictureList userId={user.sub} />
        <div>
          <img src="https://unsplash.com/photos/peFx2NFgUFY" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
