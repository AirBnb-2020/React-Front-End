import React from 'react';
import { Route, Link } from 'react-router-dom';


import './SideDrawer.css';
import Logo from '../../img/kindpng_1322264.png';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show){
        drawerClasses = 'side-drawer open';
    }
    return(
    <nav className={drawerClasses}>
         
        <ul>
       
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/listing">Start Listing Your Space</Link></li>
            
            
        </ul>

    </nav>
    );
};
export default sideDrawer;
    