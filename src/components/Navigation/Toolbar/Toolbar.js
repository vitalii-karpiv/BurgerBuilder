import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Hamburger from '../../../assets/images/hamburger.jpg'

const Toolbar = props => {
    return (
        <header className={classes.Toolbar}>
            <img className={classes.Hamburger} src={Hamburger} onClick={props.toggleSideDrawer} />
            <div className={classes.Logo}>
                <Logo/>
            </div>
            
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default Toolbar;