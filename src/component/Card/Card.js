import React from 'react';
import './Card.css'
import {BsFillCartCheckFill} from 'react-icons/bs';

const Card = (props) => {


    const {name,img,bullet,capacity,action,price ,id} = props.data;
 const handleAddToCart = (id) => {
     console.log(id)
 }

    console.log(props.data);
    return (
        <div className='card'>
            <div className='image-container'><img src={img} alt="" />
            
            </div>
            <div className='gun-info'>
            <h1>{name}</h1>
            <p>Bullet type: {bullet}</p>
            <p>Capacity: {capacity}</p>
            <p>Action: {action}</p>
            <div className='add-to-cart'>
                <button onClick={() => handleAddToCart(id)}><BsFillCartCheckFill className='icon'/></button>
                <h1>${price}</h1>

            </div>
            </div>
        


        </div>
    );
};

export default Card;