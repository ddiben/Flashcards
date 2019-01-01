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
        // generally this is passed in, but this is hardcoded for testing purposes. 
        
        this.res = props.res;
        
        this.res.manager.registerSwapFunction(this.swapActiveWindow.bind(this));

        this.state = {
            activeWindow: HOME,
            deckList: props.deckList
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

    /*
     * Update state to reflect the changes made to the decklist. 
     */
    deckListChange() {
        this.setState((state) => {
            state.deckList = this.res.repo.deckTitles;
            return state;
        });
    }

    render() {
        switch (this.state.activeWindow) {
            /*case EDIT: 
                //const handler = new EditClickHandler(this.manager);
                return <Edit deck={this.manager.activeDeck} clickHandler={handler} />  */

            default:
                const handler = new HomeClickHandler(this.res);
                this.res.repo.registerDataChangeFunction(this.deckListChange.bind(this));
                return <Home deckList={this.state.deckList} clickHandler={handler} manager={this.res.manager}/>;
        }
    }

}

export default Frame;