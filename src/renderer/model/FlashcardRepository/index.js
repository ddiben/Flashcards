/*
 * Repo class for manipulating the data of the app. 
 */

class FlashcardRepository {
    constructor(deckTitles) {
        // the list of all the decks.  
        this.deckTitles = deckTitles;
        
        this.createDeck = this.createDeck.bind(this);
        this.goodInput = this.goodInput.bind(this);

        this.updateFrame = null;
    }

    /*
     * Establish a reference so you can update the Frame's state (regardless of the current window). 
     */
    registerDataChangeFunction(updateFrame) {
        this.updateFrame = updateFrame;
    }

    /*
     * Returns true if the deck was created, false if it wasn't.  
     */
    createDeck(newTitle) {    
        if (this.goodInput(newTitle)) {
            this.deckTitles.unshift(newTitle);
            this.updateFrame();
            return true;
        } else {
            return false;
        }
    }

    /*
     * Don't allow duplicate input, nor empty string input as deck titles.  
     */
    goodInput(title) {
        var result = true;
        this.deckTitles.forEach(t => {
            if (t.replace(/(^\s+|\s+$)/g,'') === title.replace(/(^\s+|\s+$)/g,'')) {
                result = false;
            } else if (title === "") {
                result = false;
            }
        });
        return result;
    }
}

export default FlashcardRepository;