import React from "react";
import { Form, Input, Container } from "reactstrap";

const searchStyle = {
  display: "flex",
  alignItems: "center"
};

const formContainerStyle = {
  marginTop: "6em"
};

function SearchBar({ updateSearch, onSearchSubmit }) {
  return (
    <>
      <Container style={formContainerStyle}>
        <Form style={searchStyle} onSubmit={onSearchSubmit}>
          <Input
            bsSize="lg"
            type="text"
            onChange={updateSearch}
            placeholder="Search for Photos"
          />
        </Form>
      </Container>
    </>
  );
}
export default SearchBar;
