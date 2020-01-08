import React from 'react';


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
            <li><a href="/">Login</a>
            </li>
            <li><a href="/">Register</a>
            </li>
            <li><a href="/">Start Listing Your Space</a>
            </li>
        </ul>

    </nav>
    );
};
export default sideDrawer;
    