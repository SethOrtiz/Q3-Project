// src/components/Navbar.js

import React from "react";
import {CardText, Container } from "reactstrap";
import {useAuth0} from "../react-auth0-wrapper";


const PictureCard = (props) => {

    const {user } = useAuth0();

  let imgStyle={
    width: "90%",

  };
    let profileImg={
        borderRadius: "50%",
        width: "20%",

    };
  return (
    <Container className="card m-5 " >
      < div className="row" >
        <div className="col-8">
          <div className="box">
            <img src={props.url} alt="img" className="card-size" style={imgStyle} />
            <button className="btn btn-light" onClick={props.savePhoto} id={props.id} name={user.sub}>Button</button>
          </div>
        </div>
        <div className='col-4'>
            <img src={props.userImg} style={profileImg} alt=""/>
            <h5 className="">{props.userName}</h5>
            <br/>
            <CardText>
              {props.description}
            </CardText>
        </div>
      </div>
    </Container>
  );
};

export default PictureCard;
