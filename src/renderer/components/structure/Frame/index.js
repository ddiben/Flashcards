import React, { Component }  from 'react';
import Home from '../../windows/Home';
import { default as HomeClickHandler } from '../../windows/Home/ClickHandler';
import { HOME, EDIT, QUIZ } from '../../../utilities/constants';

/*
 * This holds the various windows loaded by the application. 
 */
class Frame extends Component {

    constructor(props) {
        super(props);
        this.deckList = ["latin", "spanish", "plants", 
        "bees", "your friend's names", "japanese",
        "a really really really long title, like super long bro", 
        "german", "bugs"];

        this.manager = props.manager;
        this.manager.registerSwapFunction(this.swapActiveWindow.bind(this));

        this.state = {
            activeWindow: HOME,
        }
    }

    /*
     * change the active window (this function gets passed to the WindowManager)
     *
     * possible states: 'HOME', 'EDIT', 'QUIZ',
     */
    swapActiveWindow(newWindow) {
        this.setState((state) => {
            state.activeWindow = newWindow;
            return state;
        });
    }

    render() {
        switch (this.state.activeWindow) {
            /*case EDIT: 
                //const handler = new EditClickHandler(this.manager);
                return <Edit deck={this.manager.activeDeck} clickHandler={handler} />  */

            default:
                const handler = new HomeClickHandler(this.manager);
                return <Home deckList={this.deckList} clickHandler={handler}/>;
        }
    }

}

export default Frame;