import React, { Component, Fragment } from 'react';

import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer : false
    }

    hideSideDrawerHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    toggleSideDrawer = () => {
        const showSideDrawer = this.state.showSideDrawer
        this.setState({ showSideDrawer: !showSideDrawer })
    }
    
    render () {
        const {children} = this.props;
        return (
            <Fragment>
                <Toolbar toggleSideDrawer={this.toggleSideDrawer} />
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    close={this.hideSideDrawerHandler} />
                <main className={classes.Content}>{children}</main>
            </Fragment>
        )
    }
}

export default Layout;