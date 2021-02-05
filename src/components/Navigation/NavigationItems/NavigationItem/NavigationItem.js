import React from 'react';

import classes from './NavigationItem.module.css';

const NavigationItem = props => {
    let style = null
    if(props.active) {
        style = classes.active
    }
    return <li className={classes.NavigationItem}><a className={style} href={props.link}>{props.label}</a></li>
}

export default NavigationItem;
