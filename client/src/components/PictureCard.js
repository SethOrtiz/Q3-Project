// src/components/Navbar.js

import React from "react";
import {CardText, Container } from "reactstrap";

const PictureCard = (props) => {

  let imgStyle={
    width: "90%",

  };
  console.log(props.url);

  return (
    <Container className="card m-5 " >
      < div className="row" >
        <div className="col-8">
          <div className="box">
            <img src={props.url} alt="img" className="card-size" style={imgStyle} />
            <button className="btn btn-light" onClick={props.savePhoto}>Button</button>
          </div>
        </div>
        <div className='col-4'>
            <h5 className="">UserName</h5>
            <br/>
            <CardText>
              {props.id}
              Lorem ipsum placeat dicta voluptate itaque earum sit repudiandae.
            </CardText>
        </div>
      </div>
    </Container>
  );
};

export default PictureCard;
