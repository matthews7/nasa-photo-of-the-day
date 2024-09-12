import React from "react";
import styled from "styled-components"

    

export default function ImageDiv (props){

    const CardImage = styled.img`
        width: 30%;
        border: 1px solid yellow;
        border-radius: 10px;
        margin: 2%;
        box-shadow: 10px 10px 10px yellow;
        @media (max-width: 500px){
            width: 50%;
        }
`;

    return(
        <div>
        
        <CardImage src={props.imgUrl} alt="space image">
           
        </CardImage>
        </div>
        
    )
}

