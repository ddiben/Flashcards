import React, { Component } from 'react';
import View from './View';
import './style.css';

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
            onClick={ () => clickHandler.deckEditClick(deckTitle) }
            key={index}>
                {deckTitle}
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