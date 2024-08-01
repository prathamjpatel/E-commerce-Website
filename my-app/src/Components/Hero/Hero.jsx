import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png';
import arrow from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png'




const Hero = () => {
  return (
    <div className='Hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
        <div> 
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p> Collections</p>
            <p>
                For Everyone
            </p>
        </div>
        <div className="latest-button">
            <div>Latest Collection</div>
            <img src={arrow} alt="" />
        </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero
