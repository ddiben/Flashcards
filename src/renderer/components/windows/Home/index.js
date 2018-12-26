import React, { Component } from 'react';
import View from './View';
import './style.css';
import EditBtn from './buttons/EditBtn';
import QuizBtn from './buttons/QuizBtn';

/*
 * The main screen, which displays the various decks.  
 */
const Home = props => {

    const deckElementList = wrapDeckList(props.deckList, props.clickHandler);

    return <View deckList={deckElementList}/>;  
}

/*
 * Wrap an individual deck as an html element. 
 */
export function wrapDeck(deckTitle, index, clickHandler) {
    return (
        <div className="deck card"
            key={index}>
            <div className="deck-title">
                {deckTitle}
            </div>
            <div className="deck-buttons">
                <EditBtn onClick={() => clickHandler.deckEditClick(deckTitle)}/>
                <QuizBtn onClick={() => clickHandler.deckQuizClick(deckTitle)}/>
            </div>
        </div>
    );
};

/*
 * Wrap the entire deck list (each deck as an element)
 */
export function wrapDeckList(deckList, clickHandler) {
    return deckList.map((deckTitle, index) => wrapDeck(deckTitle, index, clickHandler)); 
}

export default Home;