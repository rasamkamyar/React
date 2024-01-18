import React from "react";
import "./Slider.css"
// import IMAGES from "../images" // moshkele address dehi b proje



export default function Slider() {
    const IMAGES = ["banner.jpg", "book banner 1.jpg"]

    const [imageData, setImageData] = React.useState(["banner.jpg"])
    console.log(imageData)


    function changeSlider() {

        setImageData(prevImage => !prevImage)
    }



    return (<div className="banner" onClick={changeSlider}>
        <img src={`../src/images/${imageData ? "banner.jpg" : "book banner 1.jpg"}`} className="banner--img" />
    </div>)
}