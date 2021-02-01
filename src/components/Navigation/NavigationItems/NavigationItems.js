import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/' label='Burger Builder' active />
            <NavigationItem link='/' label='Checkout' />
        </ul>
    )
}

export default NavigationItems;