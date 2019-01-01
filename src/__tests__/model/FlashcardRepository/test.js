import 'jest';
import FlashcardRepository from '../../../renderer/model/FlashcardRepository';

describe("FlashcardRepository", () => {

    const testTitles = ["peaches", "fruits", "types of $$", "italian"];

    const mockFunc = jest.fn();

    it("creates new decks", () => {
        const repo = new FlashcardRepository([]);
        repo.registerDataChangeFunction(mockFunc);

        expect(repo.createDeck("spanish")).toEqual(true);
        expect(repo.deckTitles).toEqual(["spanish"]);
    });

    it("doesn't accept duplicate input for deck title", () => {
        const repo = new FlashcardRepository(testTitles);
        repo.registerDataChangeFunction(mockFunc);

        expect(repo.createDeck("  peaches  ")).toEqual(false);
    });
    it("doesn't accept empty input for deck title", () => {
        const repo = new FlashcardRepository(testTitles);
        repo.registerDataChangeFunction(mockFunc);

        expect(repo.createDeck("")).toEqual(false);
    });

});