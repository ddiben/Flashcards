import 'jest';
import ClickHandler from '../../../../renderer/components/windows/Home/ClickHandler';
import * as CONST from '../../../../renderer/utilities/constants';

describe("Home window's ClickHandler", () => {

    const testDeck = "fungi";

    it("opens edit window on deck 'edit' clicks", () => {
        const manager = new MockWindowManager();
        const handler = new ClickHandler(manager);

        handler.deckEditClick(testDeck);

        expect(manager.activeDeck).toEqual(testDeck);
        expect(manager.activeWindow).toEqual(CONST.EDIT);
    });

    it("opens quiz window on deck 'quiz' clicks", () => {
        const manager = new MockWindowManager();
        const handler = new ClickHandler(manager);

        handler.deckQuizClick(testDeck);

        expect(true).toEqual(false);
    });

});

class MockWindowManager {

    constructor() {
        this.activeDeck = CONST.NOT_SET;
        this.activeWindow = CONST.NOT_SET;

        this.launchEditWindow = this.launchEditWindow.bind(this);
    }

    launchEditWindow(deckTitle) {
        this.activeDeck = deckTitle;
        this.activeWindow = CONST.EDIT;
    }

}