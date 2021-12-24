import React from "react";

import logo from './logo.png';
import './Header.css';


import { faAngleDown, faBars, faBookmark, faCog, faGripHorizontal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const HeaderText = (props) => {
    return (
        <p className="Header-txt-item">
            <a href="/#">{ props.name }
            <FontAwesomeIcon icon={faAngleDown} className="Header-home-icon-down-item" />
            </a>
        </p>
    );
}


const Header = () => {
    return (
        <div className="Header">
            <header className="Header-header">
                <img src={logo} className="Header-logo" alt="logo" />
                <a href="/#"><FontAwesomeIcon icon={faGripHorizontal} className="Header-home-icon" /></a>
                <FontAwesomeIcon icon={faAngleDown} className="Header-home-icon-down" /> 
                <HeaderText name="Buy Crypto" />
                <HeaderText name="Markets" />
                <HeaderText name="Trade" />
                <HeaderText name="Derivatives" />
                <HeaderText name="Earn" />
                <HeaderText name="Finance" />
                <HeaderText name="NFT" />
        
                <div className="Header-right-icons">

                    <a href="/#"><FontAwesomeIcon icon={faBars} className="Header-home-bars" /></a>
                    <a href="/#"><FontAwesomeIcon icon={faBookmark} className="Header-home-bookmark" /></a>
                    <a href="/#"><FontAwesomeIcon icon={faCog} className="Header-home-cog" /></a>
                
                </div>
            </header>
            <hr className="hr"/>
        </div>
        
    );
}

export default Header;
