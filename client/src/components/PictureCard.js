// src/components/Navbar.js

import React from "react";
import {CardText, Container } from "reactstrap";

const PictureCard = () => {
  return (
    <Container className="card-container" >
      <div className="margin row" >
        <div className="">
          <div className="box">
            <img src="https://bit.ly/2K41yGf" alt="img" className="card-size" />
            <button className="btn btn-light">Button</button>
          </div>
        </div>
        <div>
          <div className="card-size box">
            <h1 className="">UserName</h1>
            <br/>
            <CardText>
              {" "}
              Lorem ipsum placeat dicta voluptate itaque earum sit repudiandae.
            </CardText>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PictureCard;
