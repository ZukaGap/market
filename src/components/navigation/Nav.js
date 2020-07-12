import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faUser } from '@fortawesome/free-solid-svg-icons'
import './nav.css';

import CartHeart from './cart/heartCart';
import CartShop from './cart/shopCart';

function Nav(){
    return (
        <nav className="navigation" >
            <h1>Phoenix nav</h1>
            <div className="searchBar" >
                <form action="">
                    <select id="categories" name="categories">
                        <option value="all categories">All Categories</option>
                        <option value="camera">Power Tools</option>
                        <option value="cream">hand tool</option>
                        <option value="laptop">plumbing</option>
                    </select>
                    <input type="text" placeholder="Search over 10,000 products" name="search" className="searchInput" />
                    <button id="subm" type="submit"><FontAwesomeIcon icon={faSearch} size="lg" /></button>                    
                </form>
            </div>
            <form action="">
                <select id="dropMain" name="categories">
                    <option value="main">Main</option>
                </select>                  
            </form>
            <form action="">
                <select id="dropMegaMain" name="categories">
                    <option value="megamenu">Megamain</option>
                </select>                  
            </form>
            <button id="searchSubm" type="submit"><FontAwesomeIcon icon={faSearch} size="lg" color="white" /></button>
            <CartHeart count="0" />
            <CartShop count="3" />
            <button id="user" type="submit"><FontAwesomeIcon icon={faUser} size="lg" color="white" /></button>
        </nav>
    )
}

export default Nav;