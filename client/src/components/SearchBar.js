import React from "react";
import { Form, Input, Container } from "reactstrap";

const searchStyle = {
  display: "flex",
  alignItems: "center"
};

function SearchBar({ updateSearch, onSearchSubmit }) {
  return (
    <>
      <Container>
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
