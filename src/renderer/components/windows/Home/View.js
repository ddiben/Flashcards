import React from 'react';

const View = (props) => {
    return (
        <div id="decklist">
            {props.deckList}
        </div>
    );
};

export default View;