/*
 * This is the source of data for the app.
 * 
 */

class FlashcardRepository {

    constructor() {
        this.cards = [];

        this.load = this.load.bind(this);
        this.unload = this.unload.bind(this);
    }

    /*
     * Load the flashcards into the repo.  
     */
    load(flashcards) {
        this.cards = flashcards;
    }

    /*
     * Returns all of the flashcards (to persist it).
     */
    unload() {
        return this.cards;
    }

}

export default FlashcardRepository;