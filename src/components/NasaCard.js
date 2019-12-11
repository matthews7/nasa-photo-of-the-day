
import React, {useState, useEffect} from "react";
import axios from "axios";

import Background from "./Background";
import Header from "./Header";
import Content from "./Content";

function NasaCard (){
 
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


    return(
        <div className="nasa">
            <Background imgUrl = {info.url}/>
            <Header title={info.title}/>
            <Content explain = {info.explanation} date={info.date}/>
        </div>
    )
};

export default NasaCard;