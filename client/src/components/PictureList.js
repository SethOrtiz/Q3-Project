// src/components/Navbar.js

import React from "react";
import ProfileCard from "./ProfileCard";
import {toast} from "react-toastify";



class PictureList extends React.Component {
    state = {
        savedImgs:[]
    };

    componentDidMount = async () => {
        const res = await fetch('https://pinstagram-galvanize-q3.herokuapp.com/pictures/');
        const json = await res.json();
        this.setState(prevState => ({
            ...prevState,
            savedImgs: json
        }));
        console.log(this.state)
    };

    deletePhoto = async  e => {
        e.preventDefault();
        console.log("im being deleted!");
        console.log("id", e.target.id);
        console.log("sub", e.target.name);
        const picId = e.target.id;
        const url = `https://pinstagram-galvanize-q3.herokuapp.com/pictures/${picId}`;
        console.log(picId)
        // const pictureInfo =  this.state.savedImgs.filter(image => image.id == picId);
        // console.log(pictureInfo)
        const res = await fetch(url, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (res.ok){
            this.setState(prevState => ({
                //eslint-disable-next-line
                savedImgs: prevState.savedImgs.filter(image => image.id != picId)
            }));
            toast("Image has been deleted!")
        }
    };





    render() {
        console.log(this.props.userId)
    const userPics = this.state.savedImgs.filter(picture => picture.userId === this.props.userId)
        console.log(userPics)
        return (
            <div>

                        <div className='row'>

                            {userPics.map(image => <div className='col-5'> <ProfileCard key={image.id} id={image.id} url={image.pictureUrl} userName={image.photographerName} userImg ={image.photographerImg} description={image.pictureDescription} deletePhoto={this.deletePhoto} /> </div>)}

                        </div>
            </div>
        );
    }
}

export default PictureList;
