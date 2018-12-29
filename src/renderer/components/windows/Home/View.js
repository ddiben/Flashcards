import React from 'react';

const View = (props) => {

    return (
        <div id="home">
            <div id="decklist" className="masonry">
                {props.newDeckForm}
                {props.deckList}
            </div>
        </div>
    );

};

export default View;