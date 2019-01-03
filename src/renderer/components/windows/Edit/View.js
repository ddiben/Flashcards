import React from 'react';
import Navbar from '../../structure/Navbar';
import FlashcardForm from './FlashcardForm';

const View = (props) => {
    return (
        <div className="edit">
            <FlashcardForm show={props.editing} flashcard={props.flashcard}/>
            <Navbar manager={props.manager}/>
            <div id="flashcards" className="masonry">
                {/* New Flashcard Button */}
                {props.flashcards}
            </div>
        </div>
    );
}

export default View;