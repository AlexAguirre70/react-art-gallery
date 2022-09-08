import React, {useState,useEffect} from "react";

function Gallery(props) {
    return(
        <div>
            <img src={props.objectImg} alt={props.title}></img>
            <p> {props.artist}</p>
        </div>
        


    )
}

export default Gallery