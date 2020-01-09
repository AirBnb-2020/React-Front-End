import  React from 'react';


import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import Logo from '../../img/kindpng_1322264.png';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
                {/* <div className="toolbar_logo"><a href="/">Welcome</a></div> */}
            </div>
            <img src={Logo}></img>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/"></a></li>
                    <li><a href="/"></a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
