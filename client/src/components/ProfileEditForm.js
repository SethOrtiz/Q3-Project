// src/components/Navbar.js

import React from "react";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input
} from "reactstrap";

class ProfileEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <button className="btn btn-dark lux" onClick={this.toggle}>
          {this.props.buttonLabel}

        </button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Edit Profile</ModalHeader>
          <Form>
            <ModalBody>
              <Input/>
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-light lux" onClick={this.toggle}>
                Submit
              </button>{" "}
              <button className="btn btn-light lux" onClick={this.toggle}>
                Cancel
              </button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default ProfileEditForm;
