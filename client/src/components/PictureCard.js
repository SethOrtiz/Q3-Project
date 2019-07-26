// src/components/Navbar.js

import React from "react";
import {CardText, Container } from "reactstrap";
import {useAuth0} from "../react-auth0-wrapper";


const PictureCard = (props) => {

    const {user, isAuthenticated, loginWithRedirect } = useAuth0();

  let imgStyle={
    width: "100%",

  };
    let profileImg={
        borderRadius: "50%",
        width: "40%",

    };
    let btnStyle ={
        position: "absolute",
    zIndex: "999",
    margin:  "0.5em",
    left: "90",
    right: "0",
    top: "0%", /* Adjust this value to move the positioned div up and down */
    width: "30%", /* Set the width of the positioned div */
    opacity: "0.9",
    };
  return (
    <Container className="card m-5" >
      < div className="row">
        <div className="col-8">
          <div className="box ">
            <img src={props.url} alt="img" className="rounded my-auto" style={imgStyle} />
              {!isAuthenticated && (
                  <button className='btn btn-light' style={btnStyle} onClick={() => loginWithRedirect({})}> Log in </button>
              )}
              {isAuthenticated && (
                  <button className="btn btn-light" onClick={props.savePhoto} id={props.id} name={user.sub} style={btnStyle}>Save</button>
              )}
          </div>
        </div>
        <div className='col-4'>
            <img className="py-3" src={props.userImg} style={profileImg} alt=""/>
            <h5 className="">{props.userName}</h5>
            <p>{props.description}</p>
        </div>
      </div>
    </Container>
  );
};

export default PictureCard;
