import React from 'react'
import CardList from '../CardList/CardList.component';
import "./Card.style.css"

const Card = () => {
    return (
        <div className="cards">
        <h1>CHECK OUT THESE EPIC DESTINATIONS</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardList />
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Card
