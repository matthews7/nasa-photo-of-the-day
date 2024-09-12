
import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

import ImageDiv from "./Image"
import Header from "./Header";
import Content from "./Content";


function NasaCard (){
    const [background, setBackground] = useState({})
    const [info, setInfo] = useState({});

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=MCRGuY1HBAEM4WaKmjGycovJs9rGe3wvCpkTNuoF")
    
        .then(response => {
            console.log(response);
            setInfo(response.data);
        })
        .catch(error => {
            console.log("sorry no space pics", error);
        })

    }, []);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=MCRGuY1HBAEM4WaKmjGycovJs9rGe3wvCpkTNuoF&date=2019-12-12")

        .then(response => {
            setBackground(response.data)
        })
        .catch(error => {
            console.log("sorry no space pics", error);
        })
    }, []);

    const WrapperDiv = styled.div`
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background.url});
        height: 50%;

        /* Position and center the image to scale nicely on all screens */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        
        color: yellow;

    `;

    const SubTitle = styled.h2`
        padding-top:1%;
        text-decoration: underline;
    `;

    return(
        <WrapperDiv>
            <Header date={info.date}></Header>
            
            <ImageDiv  imgUrl = {info.url}/>
            
            <SubTitle>{info.title} </SubTitle> 
            
           
           <Content explain = {info.explanation}/>
        </WrapperDiv>
    )
};

export default NasaCard;