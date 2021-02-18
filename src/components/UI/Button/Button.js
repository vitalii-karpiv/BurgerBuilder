import React from 'react';

import classes from './Button.module.css';

const Button = props => {
    const attachedClasses = [classes.Button, classes[props.color]];
    if(props.disabled) {
        attachedClasses.push(classes.Disabled)
    }

    return <button 
        className={attachedClasses.join(' ')}
        disabled={props.disabled}
        onClick={props.clicked}>{props.children}</button>
}

export default Button;