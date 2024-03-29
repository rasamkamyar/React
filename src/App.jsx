import React from "react"
import Card from "./Components/Card/Card"
import Header from "./Components/Header/Header"
import Slider from "./Components/Slider/Slider"
import Data from "./data"


function app() {
  const bookElements = Data.map(book =>
    <Card
      img={book.imgSrc}
      title={book.title}
      author={book.author}
      date={book.published_date}
      lang={book.language}
      genre={book.genre}
      price={book.price}
      hasGift={book.hasGift}
      hasFreeShipping={book.hasFreeShipping}
    />)

  return (
    <div className="container">
      <Header />
      <Slider />
      <div className="card--container">
        {bookElements}
      </div>
    </div>
  )
}

export default app

