import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'
function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/1.mp4" autoPlay loop muted></video>
            <h1>Adventure Awaits</h1>
            <p>What are uoy waitng for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
                    Get StARTED
                </Button>
                <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
                    Watch video<i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
