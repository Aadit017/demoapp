import React from 'react'
import CardList from '../CardList/CardList.component';
import "./Card.style.css"
import img9 from "../../assets/images/img-9.jpg"
import img6 from "../../assets/images/img-6.jpg"
import img7 from "../../assets/images/img-7.jpg"
import img5 from "../../assets/images/img-5.jpg"
const Card = () => {
    return (
        <div className="cards">
        <h1>CHECK OUT THESE EPIC DESTINATIONS</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardList 
                        src={img9}
                        text="Explore the hidden waterfall deep inside the Amazon Forest with us "
                        label="Adventure"
                        path="/services"
                    />
                    
                    <CardList 
                        src={img6}
                        text="Roam the streets of New York City with us "
                        label="Busy"
                        path="/services"
                    />
                    <CardList 
                        src={img7}
                        text="If you wanna succeed in life , you need to put in the efforts "
                        label="HardWork"
                        path="/services"
                    />
                    <CardList 
                        src={img5}
                        text="Wanna explore the old lost cafe with us   "
                        label="Old"
                        path="/services"
                    />
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Card
