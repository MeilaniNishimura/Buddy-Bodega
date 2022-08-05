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
                src={require('../capstone_images/pet_image2.webp')}
                text='Lorem Ipsum'
                path='/services'
                />
                <CardItem 
                src={require('../capstone_images/pet_image2.webp')}
                text='Lorem Ipsum'
                path='/services'
                />
                <CardItem 
                src={require('../capstone_images/pet_image2.webp')}
                text='Lorem Ipsum'
                path='/services'
                />
                </ul>
            </div>
        </div>
      
    </div>
  )
}


