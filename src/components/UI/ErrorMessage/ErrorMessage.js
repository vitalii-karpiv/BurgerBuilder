import React from 'react';

import classes from './ErrorMessage.module.css';

const ErrorMessage = props => {
    return (
        <div className={classes.ErrorMessage}>
            <div>Oh no!</div>
            <div>Something went wrong</div>
        </div>
    )
}

export default ErrorMessage;