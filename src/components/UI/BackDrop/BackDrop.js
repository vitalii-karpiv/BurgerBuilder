import React from 'react';

import classes from './BackDrop.module.css';

const BackDrop = props => {
    let style = null;
    if (props.show) {
        style = classes.BackDrop
    }
    return <div onClick={props.clicked} className={style}></div>
}

export default BackDrop;