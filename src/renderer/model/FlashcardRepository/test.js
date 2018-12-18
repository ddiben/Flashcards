import 'jest';
import FlashcardRepository from '.';

describe("FlashcardRepository", () => {

    const testCards = ["tomatoe", "pickle", "pumpkin"];

    it("loads flashcards", () => {
        const repo = new FlashcardRepository();
        
        repo.load(testCards);

        expect(repo.cards).toEqual(testCards);
    });

    it("unloads the flashcards", () => {
        const repo = new FlashcardRepository();
        
        repo.load(testCards);
        const result = repo.unload();

        expect(result).toEqual(testCards);
    });
    
});