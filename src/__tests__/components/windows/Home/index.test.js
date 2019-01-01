import React from 'react';
import { shallow, mount } from 'enzyme';
import Home, { wrapDeck } from '../../../../renderer/components/windows/Home/index';
import * as C from '../../../../renderer/utilities/constants';

describe("Home window", () => {

    const deckList = ["tomatoes", "spanish", "plants"];

    it("renders the deck list", () => {
        const handler = new MockClickHandler();
        const home = mount(<Home deckList={deckList} clickHandler={handler} manager={{}}/>);

        const result = home.find('#decklist');

        expect(result).toEqual(expect.anything());
    });

    it("displays deck elements", () => {
        const handler = new MockClickHandler();
        const home = mount(<Home deckList={deckList} clickHandler={handler} manager={{}}/>);

        const renderedDeckList = home.findWhere((el) => el.hasClass("deck"));

        // 3 + 1 (for new-deck-form)
        expect(renderedDeckList.length).toEqual(4);
    });

    it("listens for 'edit' clicks, and passes them back to the click handler", () => {
        const handler = new MockClickHandler();

        const home = mount(<Home deckList={deckList} clickHandler={handler} manager={{}}/>);

        const deck = findDeck(home, deckList[1]);

        deck.find('.deck-btn.edit').simulate('click');

        home.update();

        expect(handler.activeDeck).toEqual(deckList[1]);
        expect(handler.activeWindow).toEqual(C.EDIT);
    });

    /*
     * Returns a ReactWrapper for the desired deck element (from the 'home' wrapper)
     */
    function findDeck(home, deckTitle) {
        return home.findWhere( el => el.hasClass("deck") && el.someWhere(dt => dt.find('.deck-title').text() === deckTitle));
    }

    it("listens for 'quiz' clicks", () => {
        const handler = new MockClickHandler();
        const home = mount(<Home deckList={deckList} clickHandler={handler} manager={{}}/>);

        const deck = findDeck(home, deckList[2]);

        deck.find('.deck-btn.quiz').simulate('click');

        home.update();

        expect(handler.activeDeck).toEqual(deckList[2]);
        expect(handler.activeWindow).toEqual(C.QUIZ);
    });

    it("creates new decks", () => {

    });

});

class MockClickHandler {
    constructor() {
        this.activeDeck = C.NOT_SET;
        this.activeWindow = C.NOT_SET;

        this.deckEditClick = this.deckEditClick.bind(this);
        this.newDeckClick = this.newDeckClick.bind(this);
    }

    newDeckClick(deckTitle) {

    }

    deckEditClick(deckTitle) {
        this.activeDeck = deckTitle;
        this.activeWindow = C.EDIT;
    }

    deckQuizClick(deckTitle) {
        this.activeDeck = deckTitle;
        this.activeWindow = C.QUIZ;
    }

}