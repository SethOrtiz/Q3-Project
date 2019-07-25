// src/components/Profile.js

import React from "react";
import { useAuth0 } from "../react-auth0-wrapper";
import PictureCard from "./PictureCard"

const Profile = () => {
  let imgStyle = {
    borderRadius: "50%",
    height: "7em",
    width: "7em"
  };
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return "Loading...";
  }

  return (
    <div>
      <img src={user.picture} alt="Profile" style={imgStyle} className="" />
      <h2>name: {user.nickname}</h2>
      <p>email: {user.email}</p>
      <p>{user.sub}</p>

      <code>{JSON.stringify(user, null, 2)}</code>

      <div>
        <h2>Saved Photos Here</h2>
        <div>
          <img src="https://unsplash.com/photos/peFx2NFgUFY" alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <PictureCard />
        </div>
        <div className="col-5">
          <PictureCard />
        </div>
        <div className="col-5">
          <PictureCard />
        </div>
      </div>
    </div>
  );
};

export default Profile;
