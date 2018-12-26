import { HOME, EDIT, QUIZ, NOT_SET } from '../../utilities/constants';

/*
 * This manages the flow of the app, inflating and deflating 
 * the various windows within frame.  It also holds some 
 * basic data about the app, in an 'appState' object. 
 */
class WindowManager {

    constructor() {
        // This function swaps the active window in the Frame
        this.swapActiveWindow = null;

        this.appState = {
            activeWindow: HOME,
            activeDeck: NOT_SET,
        }

        this.launchEditWindow = this.launchEditWindow.bind(this);
    }

    /*
     * This function links the Frame and the WindowManager. 
     */
    registerSwapFunction(func) {
        this.swapActiveWindow = func;
    }

    /*
     * Function to launch 'Edit' window for the deck with the given title. 
     */
    launchEditWindow(deckTitle) {
        console.log(`Editing ${deckTitle}`);
    }
     
}

export default WindowManager;