import { Link } from 'react-router-dom'
import './LostPost.css'

export default function Post(props) {


    return (
        <section className="container">
        <div className="lostCard">
            
            {
                (
                    props.post?.Image
                )?

                <img src={require(`../capstone_images/${props.post?.Image}`)} className='card-image'></img>:
                <></>
            }
            
            <h1>MISSING</h1>
            <h3>
                {props.post?.Name.toUpperCase()}
            </h3>
            <p>Breed: { props.post?.Breed }</p>
            <p>Collar: {props.post?.Collar}</p>
            <p>Color: {props.post?.Color}</p>
            <p>Last Seen: {props.post?.LastSeen} on {props.post?.Lost}</p>
            <p>Contact Number: {props.post?.ContactNumber}</p>
            <p>Date Posted: { props.post?.Posted?.toDate()?.toLocaleDateString() }</p>
            
        </div>
        </section>
    )
}