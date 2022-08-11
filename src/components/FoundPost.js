import { Link } from 'react-router-dom'
import './FoundPost.css'

export default function FoundPost(props) {


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

            <h1>FOUND</h1>
            <p>Color: { props.post?.Color }</p>
            <p>Found At: {props.post?.FoundAt} on {props.post?.DateFound}</p>
            <p>Contact Number: {props.post?.Contact}</p>
            <p>Date Posted: { props.post?.Posted?.toDate()?.toLocaleDateString() }</p>
            
        </div>
        </section>
    )
}