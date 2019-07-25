// src/components/Navbar.js

import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import PictureCard from "./PictureCard"


class Main extends React.Component {
  state = {
    searchbar: "",
    images: []
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


  savePhoto =  async e => {
  e.preventDefault();
    console.log("im being saved!");
    console.log("id", e.target.id);
    console.log("sub", e.target.name);
    const url = 'http://localhost:8000/pictures';
    const userId = e.target.name;
    const id = e.target.id;
    const pictureInfo =  this.state.images.filter(image => image.id == id);
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({userId:userId, pictureInfo:pictureInfo}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (res.ok){
      alert('your image has been saved!')
    }
  };

  render() {
    let imageList = this.state.images;
    console.log(imageList);
    return (
      <div>
        <div>
          <div>
            <SearchBar updateSearch={this.updateSearch} onSearchSubmit={this.onSearchSubmit} />
          </div>
          <div className='row'>

            {imageList.map(image => <div className='col-5'> <PictureCard key={image.id} id={image.id} url={image.urls.regular} userName={image.user.name} userImg ={image.user.profile_image.medium} description={image.alt_description}  savePhoto={this.savePhoto} /> </div>)}

          </div>


        </div>
      </div>
    );
  }
}

export default Main;
