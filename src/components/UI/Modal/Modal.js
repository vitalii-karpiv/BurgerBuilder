import React, {Component, Fragment} from 'react';

import classes from './Modal.module.css';
import BackDrop from '../BackDrop/BackDrop';

export default class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.show !== nextProps.show || nextProps.children !== this.props.children;
    }

    render () {
        return (
            <Fragment>
                <BackDrop clicked={this.props.clicked} show />
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? "1" : "0" }}>
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}
