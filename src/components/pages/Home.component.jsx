import React from 'react'
import "../../App.css"
import HeroSection from '../HeroSection/HeroSection.component';
import Card from '../Card/Card.component';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div >
          <HeroSection />  
          <Card />
          <Footer />
        </div>
)
}

export default Home
