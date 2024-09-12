import React from "react";
import styled from "styled-components";



export default function Content (props){

    const Explanation = styled.p`
        width: 80%;
        margin: 1% auto;
        // border: 1px solid yellow;
        border-radius: 10px;
        padding-bottom: 8%;
        // padding-top: 1%;

    `;

    return(
        <div className="content">
            <Explanation>{props.explain}</Explanation>
            
        </div>
    )
}