import React from 'react';
import { mount } from 'enzyme';
import Home, { wrapDeck } from '../../../../renderer/components/windows/Home/index';

describe("Home window", () => {

    const deckList = ["tomatoes", "spanish", "plants"];

    it("renders the deck list", () => {
        const home = mount(<Home deckList={deckList}/>);

        const result = home.find('#decklist');

        expect(result).toEqual(expect.anything());
    });

    it("displays deck elements", () => {
        const home = mount(<Home deckList={deckList}/>);

        const renderedDeckList = home.findWhere((el) => el.hasClass("deck"));

        expect(renderedDeckList.length).toEqual(3);
    });

    it("listens for 'edit' clicks, and passes them back to the click handler", () => {
        const handler = new MockClickHandler();

        const home = mount(<Home deckList={deckList} clickHandler={handler}/>);

        const testDeckElement = home.findWhere((el) => el.hasClass("deck") && el.text() === deckList[1]);

        testDeckElement.simulate('click');

        home.update();

        expect(handler.activeDeck).toEqual(deckList[1]);
    });

    it("listens for 'quiz' clicks", () => {

    });

    it("creates new decks", () => {

    });

});

class MockClickHandler {
    constructor() {
        this.activeDeck = "not yet set";

        this.deckEditClick = this.deckEditClick.bind(this);
    }

    deckEditClick(deckTitle) {
        this.activeDeck = deckTitle;
    }

}