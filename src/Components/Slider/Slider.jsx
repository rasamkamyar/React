
import React from "react";
import "./Slider.css"
// import IMAGES from "../images"   // moshkele address dehi b proje


export default function Slider() {

    const [imageData, setImageData] = React.useState(["HARCHI"])  //VORUDI STATE TASIRI RU AMALKARD NADARE 

    function changeSlider() {

        setImageData(prevImage => !prevImage)
        // console.log(prevImage) // not defined

    }

    return (<div className="banner" onClick={changeSlider}>
        <img src={`./src/images/${imageData ? "banner4.jpg" : "banner3.jpg"}`} className="banner--img" />
    </div>)
}