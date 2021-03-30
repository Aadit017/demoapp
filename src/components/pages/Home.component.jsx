import React from 'react'
import "../../App.css"
import HeroSection from '../HeroSection/HeroSection.component';
import Card from '../Card/Card.component';

const Home = () => {
    return (
        <div className="home">
          <HeroSection />  
          <Card />
        </div>
)
}

export default Home
