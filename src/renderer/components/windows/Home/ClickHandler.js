/*
 * Handles the clicks that occur in the 'home' window.  
 */

class ClickHandler {
    
    constructor(manager) {
        this.manager = manager;

        this.deckEditClick = this.deckEditClick.bind(this);
        this.deckQuizClick = this.deckQuizClick.bind(this);
        this.newDeckClick = this.newDeckClick.bind(this);
    }

    newDeckClick(newTitle) {
        console.log(newTitle);
    }

    deckEditClick(deckTitle) {
        this.manager.launchEditWindow(deckTitle);
    }

    deckQuizClick(deckTitle) {
        this.manager.launchQuizWindow(deckTitle);
    }

}

export default ClickHandler;