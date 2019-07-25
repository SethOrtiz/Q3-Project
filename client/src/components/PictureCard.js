// src/components/Navbar.js

import React from "react";
import {CardText, Container } from "reactstrap";

const PictureCard = () => {

  let imgStyle={
    width: "90%",

  };

  return (
    <Container className="card m-5 " >
      < div className="row" >
        <div className="col-8">
          <div className="box">
            <img src="https://bit.ly/2K41yGf" alt="img" className="card-size" style={imgStyle} />
            <button className="btn btn-light">Button</button>
          </div>
        </div>
        <div className='col-4'>
            <h5 className="">UserName</h5>
            <br/>
            <CardText>
              {" "}
              Lorem ipsum placeat dicta voluptate itaque earum sit repudiandae.
            </CardText>
        </div>
      </div>
    </Container>
  );
};

export default PictureCard;
