// src/components/Navbar.js

import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import PictureCard from "./PictureCard"
class Main extends React.Component {
  state = {
    searchbar: "",
    images: {}
  };

  onSearchSubmit = async e => {
    let searchTerm = this.state.searchbar;
    e.preventDefault();
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: searchTerm
      },
      headers: {
        Authorization:
          "Client-ID dd0972e3640bc4270e4b163d71ceb238a582a9b75e793ff7ee72917d15466000"
      }
    });
    this.setState({
      ...this.state,
      images: response.data.results
    });
  };
  updateSearch = e => {
    e.preventDefault();
    this.setState({
      searchbar: e.target.value
    });
  };
  render() {
    return (
      <div>
        <div>
          <div>
            <SearchBar updateSearch={this.updateSearch} onSearchSubmit={this.onSearchSubmit} />
          </div>
          <PictureCard/>
        </div>
      </div>
    );
  }
}

export default Main;
