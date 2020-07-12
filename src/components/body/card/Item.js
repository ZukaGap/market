import React from 'react';
import './item.css';

import { ReactComponent as StarG } from './starG.svg';
import { ReactComponent as StarB } from './starB.svg';

function Item(props){
    function itemPrice () {
        if(props.data.sale === 'true') {
            return (
                <div className="itemprice" >
                    <span className="newprice">${props.data.newPrice}</span>
                    <span className="oldPrice">${props.data.priceD}</span>
                </div>
            )
        } 
        if(props.data.sale === 'false'){
            return (
                <div className="itemprice" >
                    <span className="price">${props.data.priceD}</span>
                </div>
            )
        }
    }

    function itemCondition () {
        switch (props.data.condition){        
            case 'new': {
                return( <span className="conditionNew">{props.data.condition}</span> )
            }
            case 'hot': {
                return( <span className="conditionHot">{props.data.condition}</span> )
            }
            case 'sale': {
                return( <span className="conditionSale">{props.data.condition}</span> )
            }
            default: {
                return( <></>)
            }
        }
    }

    function starRate () {  
        const arr = [];
        for(let i=0; i < props.data.rate; i++) {
            arr.push(<StarB className='stars' />);
        }
        for(let i=0; i < 5-props.data.rate; i++) {
            arr.push(<StarG className='stars' />);
        }
        return (
                <div className="starrate">
                {arr}
                <span>{props.data.review} Reviews</span>
                </div>)
    }

    return (
        <div className="item" >
            {itemCondition()}
            <img src={require('../IMG/700x700.png')} alt="item" />
            <h3>{props.data.name}</h3>
            <p>{props.data.watt}</p>
            {starRate()}
            {itemPrice()}
        </div>
    )
}

export default Item;