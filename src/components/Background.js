import React from "react";




export default function Background (props){

    return(
        <body className="body">
            <img className="bg-img" src={props.imgUrl} alt="background image"></img>
        </body>
    )
}