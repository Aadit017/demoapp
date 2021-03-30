import React from 'react'
import "../../App.css"
import Button from '../Button/Button.component';
import "./HeroSection.style.css"
const HeroSection = () => {
    return (
        <div className="hero-container">
                <image src="./assets/images/img-2.jpg" type="video/mp4" autoPlay loop muted></image>
                <h1>Adventure Awaits</h1>
                <p>what are you waiting for </p>
                <div className="hero-btns">
                    <Button className="btn" buttonStyle="btn--outline " buttonSize="btn--large">GET STARTED</Button>
                    <Button className="btns" buttonStyle="btn--primary " buttonSize="btn--large">WATCH TRAILER
                    <i className="far fa-play-circle" /> 
                    </Button>
                </div>
        </div>
    )
}

export default HeroSection
