import React from 'react'
import { Link } from 'react-router-dom'

export default function CardItem(props) {
  return (
    <>
    <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
            <figure className="cards__item__pic-wrap" >
                <img src={props.src} alt="Pet Image" className="cards__item__img" />
                </figure>
                <div className="cards__item__info">
                    <h2 className="cards__itme__text">{props.text}</h2>
                    </div>
        </Link>
    </li>

    </>
  )
}


