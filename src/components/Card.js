import './card.css';
import { Link } from 'react-router-dom';

function Card(props) {


    return (

        <div key={props.data.id} className='col-md-3' >
            <Link to={`/product/${props.data.id}`}>
                <div className='cards'>
                    <div className='card-img'>
                        <img src={props.data.image} alt="img" />
                    </div>
                    <div className='card-text'>
                        <p>Price : {props.data.price}</p>
                        <p className='title'>{props.data.title}</p>
                        <button className='onebtn'>Add To Cart</button>
                    </div>
                </div>
            </Link>
        </div >

    )
}

export default Card;