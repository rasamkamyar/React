import React from "react"

import "./Card.css"

function Card(props) {

    return (<div className="card">
        <img src={`./src/images/${props.img}`} className="card--img" />
        <h1>{props.title}</h1>
        <h2 className="card--author">
            <span className="topic" >نویسنده : </span>
            <span>{props.author} </span>
        </h2>
        <button className="card--button">افزودن به سبد خرید</button>
        <div className="card--data">
        <p>
            <span className="topic">تاریخ انتشار : </span>
            <span>{props.date}</span>
        </p>
        <p>
            <span className="topic">ژانر : </span>
            <span>{props.genre}</span>
        </p>
        </div>
        {props.hasGift && <span className="gift"><i class="fa fa-gift"></i></span>}
        {props.hasFreeShipping && <span className="freeShipping">ارسال رایگان</span>}
    </div>)
}
export default Card