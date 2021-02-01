import React, {Fragment} from 'react';

import classes from './Modal.module.css';
import BackDrop from '../BackDrop/BackDrop';

const Modal = props => {
    return (
        <Fragment>
            <BackDrop clicked={props.clicked} />
            <div 
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? "1" : "0" }}>
                {props.children}
            </div>
        </Fragment>
    )
}

export default Modal;