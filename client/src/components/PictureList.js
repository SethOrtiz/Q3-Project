// src/components/Navbar.js

import React from "react";
import PictureCard from "./PictureCard";
// import PictureCard from "./PictureCard"


class PictureList extends React.Component {
    state = {
        savedImgs:[]
    };

    componentDidMount = async () => {
        const res = await fetch('http://localhost:8000/pictures');
        const json = await res.json();
        this.setState(prevState => ({
            ...prevState,
            savedImgs: json
        }));
        console.log(this.state)
    };





    render() {
        console.log(this.props.userId)
    const userPics = this.state.savedImgs.filter(picture => picture.userId === this.props.userId)
        console.log(userPics)
        return (
            <div>

                        <div className='row'>

                            {userPics.map(image => <div className='col-5'> <PictureCard key={image.id} id={image.id} url={image.pictureUrl} userName={image.photographerName} userImg ={image.photographerImg} description={image.pictureDescription}  /> </div>)}

                        </div>
            </div>
        );
    }
}

export default PictureList;
