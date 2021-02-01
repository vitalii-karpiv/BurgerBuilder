import React from 'react';

import classes from './BackDrop.module.css';

const BackDrop = props => {
    return <div onClick={props.clicked} className={props.show && classes.BackDrop}></div>
}

export default BackDrop;