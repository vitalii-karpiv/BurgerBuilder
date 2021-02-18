import React from 'react';

import classes from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

const NavigationItem = props => {
    return (
        <li className={classes.NavigationItem}>
            <NavLink exact activeClassName={classes.active} to={props.link}>
                {props.label}
            </NavLink>
        </li>
    )
}

export default NavigationItem;
