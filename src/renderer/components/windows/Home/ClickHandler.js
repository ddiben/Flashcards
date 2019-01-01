/*
 * Handles the clicks that occur in the 'home' window.  
 */

class ClickHandler {
    
    constructor(res) {
        this.manager = res.manager;
        this.repo = res.repo;

        this.deckEditClick = this.deckEditClick.bind(this);
        this.deckQuizClick = this.deckQuizClick.bind(this);
        this.newDeckClick = this.newDeckClick.bind(this);
    }

    newDeckClick(newTitle) {
        return this.repo.createDeck(newTitle);
    }

    deckEditClick(deckTitle) {
        this.manager.launchEditWindow(deckTitle);
    }

    deckQuizClick(deckTitle) {
        this.manager.launchQuizWindow(deckTitle);
    }

}

export default ClickHandler;