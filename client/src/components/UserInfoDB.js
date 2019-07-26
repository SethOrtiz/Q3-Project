import React from "react";
import ProfileEditForm from "./ProfileEditForm";

const imgStyle = {
  borderRadius: "50%",
  height: "9em",
  width: "9em",
  marginRigth: "3em"
};

const topStyle = {
  marginBottom: "2em"
};

const infoStyle = {
  margin: "9em",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderBottom: "1px solid #dddddd"
};

class UserInfoDB extends React.Component {
  state = {
    userNameDB: "",
    profilePicDB: "",
    bioDB: ""
  };

  // componentDidMount = async () => {
  //   console.log("userID in db fetch", this.props.userId)
  //   const id = this.props.userId
  //   const url = `http://localhost:8000/users/${id}`
  //   const res = await fetch(url);
  //   const json = await res.json();
  //   this.setState(prevState => ({
  //     ...prevState,
  //     userNameDB: json.userName,
  //     profilePicDB: json.profilePic,
  //     bioDB: json.bio
  //   }));
  //   console.log(this.state);
  // };

  updateProfle = (newState) => {
    this.setState(prevState => ({
      ...prevState,
      ...newState
    }));
  }

  render() {
    const userNameDB = this.state.userName;
    const profilePicDB = this.state.profilePic;
    const bioDB = this.state.bio;
    return (
      <div className="container" style={infoStyle}>
        <div className="row" style={topStyle}>
          <div className="col-lg-5">
            <img
              src={profilePicDB ? profilePicDB : this.props.BUPicture}
              style={imgStyle}
              alt="Profile"
            />
          </div>
          <div className="col-lg-5">
              <h1>{userNameDB ? userNameDB : this.props.BUName}</h1>
              <h5>{bioDB}</h5>
            </div>
          <div className="col-lg-2">
            <ProfileEditForm userId={this.props.userId} updateProfile={this.updateProfle} />
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfoDB;
