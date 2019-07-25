// src/components/Profile.js

import React from "react";
import { useAuth0 } from "../react-auth0-wrapper";

const Profile = () => {
    let imgStyle={
        borderRadius: "50%",
        height: "7em",
        width: "7em"
    };
    const { loading, user } = useAuth0();

    if (loading || !user) {
        return "Loading...";
    }

    return (
        <>

            <img src={user.picture} alt="Profile" style={imgStyle} className=''/>
            <h2>Name: {user.name}</h2>
            <p>UserName: {user.nickname}</p>
            <p>{user.sub}</p>

            <code>{JSON.stringify(user, null, 2)}</code>
        </>
    );
};

export default Profile;