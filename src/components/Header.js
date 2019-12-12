import React from "react";
import styled from "styled-components";



export default function Header (props){
    const TitleH1 = styled.h1`
        text-decoration: underline;
        padding: 1%;
    `;

    


    return(
        <div className="title">
            <TitleH1>Astronomy Photo of the Day: <span>{props.date}</span></TitleH1>
            
        </div>
    )
}