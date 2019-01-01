import 'jest';
import ClickHandler from '../../../../renderer/components/windows/Home/ClickHandler';
import * as C from '../../../../renderer/utilities/constants';

describe("Home window's ClickHandler", () => {

    const testDeck = "fungi";

    it("opens edit window on deck 'edit' clicks", () => {
        const manager = new MockWindowManager();
        const res = {manager: manager}
        const handler = new ClickHandler(res);

        handler.deckEditClick(testDeck);

        expect(manager.activeDeck).toEqual(testDeck);
        expect(manager.activeWindow).toEqual(C.EDIT);
    });

    it("opens quiz window on deck 'quiz' clicks", () => {
        const manager = new MockWindowManager();
        const res = {manager: manager}
        const handler = new ClickHandler(res);

        handler.deckQuizClick(testDeck);

        expect(manager.activeDeck).toEqual(testDeck);
        expect(manager.activeWindow).toEqual(C.QUIZ);
    });

});

class MockWindowManager {

    constructor() {
        this.activeDeck = C.NOT_SET;
        this.activeWindow = C.NOT_SET;

        this.launchEditWindow = this.launchEditWindow.bind(this);
    }

    launchEditWindow(deckTitle) {
        this.activeDeck = deckTitle;
        this.activeWindow = C.EDIT;
    }

    launchQuizWindow(deckTitle) {
        this.activeDeck = deckTitle;
        this.activeWindow = C.QUIZ;
    }

}