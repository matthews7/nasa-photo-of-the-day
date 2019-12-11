import React from "react";



export default function Content (props){


    return(
        <div className="content">
            <p className="explanation">{props.explain}</p>
            <p className="date">{props.date}</p>
        </div>
    )
}