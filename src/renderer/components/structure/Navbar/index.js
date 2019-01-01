import React, { Component } from 'react';
import './style.css';

/*
 * which allows alternate functionality depending on the current window. 
 */
class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentDeck: props.currentDeck
        }

        this.onClick = props.manager.launchHomeWindow;
    }

    render() {
        return (
            <div className="navbar">
                <div className="nav-current-deck">
                    {this.state.currentDeck}
                </div>
                <div className="nav-home-btn" onClick={() => this.onClick()}>
                    H
                </div>
            </div>
        );
    }

}

export default Navbar;