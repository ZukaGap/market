import React from 'react';
import './Items.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import Item from './card/Item';
import Products from './dataBase.json';

function Items(){
    const newdata = Products.map( (data) => {
        return (
            <Item key={data.id} data={data} />
        )
    })

    return (
        <div className="body">
            <div className="bnav" >
                <div className="left" >
                    <h2>Feature Products</h2>
                </div>
                <div className="right" >
                    <button className="activeB" >All</button>
                    <button>power tools</button>
                    <button>hand tools</button>
                    <button>plumbing</button>
                    <button id="leftarrow" ><FontAwesomeIcon icon={faChevronLeft} size="lg" color="grey" /></button>
                    <button id="rightarrow" ><FontAwesomeIcon icon={faChevronRight} size="lg" color="grey" /></button>
                </div>
            </div>
            <div className="items" >
                {newdata}
            </div>
        </div>
        )
}

export default Items;