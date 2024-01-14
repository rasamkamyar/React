import React from "react"
import "./Header.css"

function Header() {
    return (<div className="header">
        <h1>کتاب فروش</h1>
        <img src="./src/images/logo.jpg" className="header--img"/>
        <nav>
            <a href="#">خانه </a>
            <a href="#">درباره ما </a>
            <a href="#">ارتباه با ما </a>
            <a href="#" className="header--basket">سبد خرید </a>
        </nav>
    </div>)
}

export default Header