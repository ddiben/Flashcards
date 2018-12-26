import React, { Component }  from 'react';
import Home from '../../windows/Home';
import { default as HomeClickHandler } from '../../windows/Home/ClickHandler';

/*
 * This holds the various windows loaded by the application. 
 */
class Frame extends Component {

    constructor(props) {
        super(props);
        this.deckList = ["latin", "spanish", "plants", "bees", "your friend's names"];

        this.manager = props.manager;
        this.manager.registerSwapFunction(this.swapActiveWindow.bind(this));

        this.state = {
            activeWindow: 'home',
        }
    }

    /*
     * change the active window (this function gets passed to the WindowManager)
     *
     * possible states: 'home', 'edit', 'quiz',
     */
    swapActiveWindow(newWindow) {
        this.setState((state) => {
            state.activeWindow = newWindow;
            return state;
        });
    }

    render() {
        switch (this.state.activeWindow) {
            default:
                const handler = new HomeClickHandler(this.manager);
                return <Home deckList={this.deckList} clickHandler={handler}/>;
        }
    }

}

export default Frame;