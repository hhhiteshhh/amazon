import React, { useState } from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { Zoom } from '@material-ui/core';
import { auth } from './firebase';
import SwitchButton from "./switch";

function Header() {
    const [darkThem,setDarkThem]=useState(true);
    const [{basket,user},dispatch] = useStateValue();
const handleAuthentication = () => {
    if(user){
        auth.signOut();
    }
} 

function themChanger(){
    setDarkThem(!darkThem);
    document.body.style.filter = darkThem?"grayscale()":"none";
  }
    return (
        <div className="header">
      
      <SwitchButton themFunction={themChanger} />

        <Link to="/">
        <img className="header__logo" 
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
        alt="amazon-logo"    
        />            
        </Link>
        <Zoom in={true}>
        <div
        className="header__search">
            <input className="header__searchInput" type="text" />
            <SearchIcon className="header__searchIcon" />
            {/* logo */}
        </div></Zoom>
        <div className="header__nav">
      

        <Link to={!user && "/login"}>
        <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello,{user?user?.email:"Guest"}</span>
            <span className="header__optionLineTwo">{user?"Sign Out" : "Sign In"}</span>
        </div>
        </Link>
        <Link to="/orders">
        <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo">& Orders</span>
            </div>
        </Link>
        <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span></div>
        <Link to="/checkout">
        <div className="header__optionBasket">
        <Zoom in={true}>
            <ShoppingCartIcon />
        </Zoom>
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
        </Link>
        </div>
    </div>
    );
}

export default Header;
