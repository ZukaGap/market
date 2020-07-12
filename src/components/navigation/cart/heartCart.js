import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './cart.css';


function CartHeart(props) {
    return (
        
        <div className="Cart">
            <div className="Cart-image">
                <FontAwesomeIcon icon={faHeart} size="lg" color="white" />
            </div>  
            <div className="Cart-counter-container">  
                <span className="Cart-counter">{props.count}</span>
            </div>
        </div>        
    )
}

export default CartHeart;