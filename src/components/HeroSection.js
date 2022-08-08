import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import'../App.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video autoPlay loop muted >
        <source src={require("../capstone_images/background.mp4")} type='video/mp4' />
        </video>
      <h1>ABOUT US</h1>
      <p className='description'>Our mission is to provide a space for local pet owners to thrive. Help us reunite pet owners with their lost buddies through our lost and found section,
        and provide the best quality of life for their pets through our pet service locators. Search for animals in need of loving homes via our adopt page.</p>
    </div>
  )
}

export default HeroSection
