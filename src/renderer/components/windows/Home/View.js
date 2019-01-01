import React from 'react';
import Navbar from '../../structure/Navbar';

const View = (props) => {

    return (
        <div id="home">
            <Navbar currentDeck={props.currentDeck} manager={props.manager}/>
            <div id="decklist" className="masonry">
                {props.newDeckForm}
                {props.deckList}
            </div>
        </div>
    );

};

export default View;