import 'jest';
import React from 'react';
import { mount } from 'enzyme';

import Edit from '../../../../renderer/components/windows/Edit';

describe("Edit window", () => {

    const flashcardList = [
        {
            prompt: "russian",
            definitions: ["language of spain"],
            usage: "hey, are they speaking russian?",
            daysToQuiz: 4,
        },
        {
            prompt: "french",
            definitions: ["language of france"],
            usage: "hey, are they speaking french?",
            daysToQuiz: 9,
        },
        {
            prompt: "spanish",
            definitions: ["language of spain", "language of Mexico", "language of Peru"],
            usage: "hey, are they speaking spanish?",
            daysToQuiz: 2,
        }
    ];

    it("renders flashcards from the list", () => {
        const man = new MockManager();
        const edit = mount(<Edit flashcardList={flashcardList} manager={man}/>);

        const renderedFlashcards = edit.find('.flashcard');

        expect(renderedFlashcards.length).toEqual(3);
    });

    it("opens modal on flashcardclicks...", () => {
        const man = new MockManager();
        const edit = mount(<Edit flashcardList={flashcardList} manager={man}/>);

        edit.findWhere( 
            el => el.hasClass("flashcard") && el.someWhere(
                dt => dt.find('.flashcard-prompt').text() === flashcardList[1].prompt
            )
        ).simulate('click');

        edit.update();

        expect(edit.state().editing).toBe(true);
    });

    it("inflates flashcard form with the proper props", () => {
        expect(false).toBe(true);
    });

});

class MockManager {

    constructor() {
        this.state = {};

    }

    launchHomeWindow() {
        // stubbed function
    }

}