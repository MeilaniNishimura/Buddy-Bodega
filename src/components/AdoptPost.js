import { Link } from 'react-router-dom'
import './AdoptPost.css'

export default function AdoptPost(props) {


    return (
        <section className="container">
            <div className="lostCard">

                {
                    (
                        props.post?.Image
                    ) ?

                        <img src={require(`../capstone_images/${props.post?.Image}`)} className='card-image'></img> :
                        <></>
                }

                <h1>ADOPT</h1>
                <p>Age: {props.post?.Age}</p>
                <p>Breed: {props.post?.Breed}</p>
                <p>Description: {props.post?.Description}</p>
                <p>Contact Number: {props.post?.ContactNumber}</p>
                <p>Price: {props.post?.Price}</p>
                <p>Date Posted: {props.post?.Posted?.toDate()?.toLocaleDateString()}</p>

            </div>
        </section>
    )
}