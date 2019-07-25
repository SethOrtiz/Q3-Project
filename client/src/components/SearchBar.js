import React from "react";
import { Form, Input } from "reactstrap";

function SearchBar({ updateSearch, onSearchSubmit }) {
  return (
    <>
      <div   className="container-fluid space">
        <Form   onSubmit={onSearchSubmit}>
          <Input
            bsSize="lg"
            type="text"
            onChange={updateSearch}
            placeholder="Search for Photos"
            className="lux-control"
            style={{width: '40em'}}
          />
        </Form>
      </div>
    </>
  );
}
export default SearchBar;

