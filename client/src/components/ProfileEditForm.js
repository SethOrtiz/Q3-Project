// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  Label,
  FormGroup
} from "reactstrap";

class ProfileEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      userName: "",
      bio: "",
      profilePic: "",
    };

    this.toggle = this.toggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  onSubmit = async e => {
    e.preventDefault();
    const url = 'https://pinstagram-galvanize-q3.herokuapp.com/users';
    const userId = this.props.userId; 
    const userName = this.state.userName
    const bio = this.state.bio;
    const profilePic = this.state.profilePic;
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        userId,
        userName,
        bio,
        profilePic
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (res.ok) {
      toast("Profile Has Been Updated!");
    }
  };

  render() {
    return (
      <div>
        <button className="btn btn-dark lux" onClick={this.toggle}>
          {" "}
          Edit Profile{" "}
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Edit Profile</ModalHeader>
          <Form onSubmit={this.onSubmit}>
            <ModalBody>
              <FormGroup>
                <Label for="userName"> Name</Label>
                <Input
                  type="name"
                  name="userName"
                  id="userName"
                  placeholder="Name"
                  onChange={this.handleInputChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="profilePic">Bio</Label>
                <Input
                  type="text"
                  name="bio"
                  id="bio"
                  placeholder="Bio"
                  onChange={this.handleInputChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="profilePic">Profile Picture</Label>
                <Input
                  type="url"
                  name="profilePic"
                  id="profilePic"
                  placeholder="IMG URL"
                  onChange={this.handleInputChange}
                  required
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <div>
                <button type="submit" className="btn btn-light lux">
                  Submit
                </button>
              </div>
              <Link
                className="btn btn-light lux"
                to="/profile"
                onClick={this.toggle}
              >
                Cancel
              </Link>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default ProfileEditForm;
