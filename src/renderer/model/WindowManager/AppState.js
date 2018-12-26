import { HOME, NOT_SET } from '../../utilities/constants';

/*
 * Container for basic app state that needs to be persisted across 
 * windows, or generally accessible. 
 */

class AppState {
    constructor() {
        this.activeWindow = HOME; 
        this.activeDeck = NOT_SET;
    }
}

export default AppState;