import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import'../App.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='../public/capstone_images/background.mp4' autoPlay loop muted />
      <h1>PASS</h1>
      <p>PASS</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'>
            PASS
        </Button>
        <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>
            PASS2 
        </Button>
      </div>
    </div>
  )
}

export default HeroSection