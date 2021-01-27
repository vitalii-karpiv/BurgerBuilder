import React, { Fragment } from 'react';

import classes from './Layout.module.css';

const Layout = props => {
    const {children} = props;
    return (
        <Fragment>
            <div className={classes.Content}>Toolbar, Sidedrawer, Backdrop</div>
            <main>{children}</main>
        </Fragment>
    )
}

export default Layout;