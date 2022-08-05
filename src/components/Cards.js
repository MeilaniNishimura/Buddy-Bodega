import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

export default function Cards() {
  return (
    <div className="cards">
        <h1>LOREM IPSUM</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                <CardItem 
                src={require('../capstone_images/pets_9.jpeg')}
                text='Pet Services'
                path='/services'
                />
                <CardItem 
                src={require('../capstone_images/strays.webp')}
                text='Lost & Found'
                path='/lostandFound'
                />
                <CardItem 
                src={require('../capstone_images/pets_6.webp')}
                text='Adopt'
                path='/adopt'
                />
                </ul>
            </div>
        </div>
      
    </div>
  )
}


