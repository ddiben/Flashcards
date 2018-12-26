import React from 'react';

const QuizBtn = (props) => {
    
    return (
        <div className="deck-btn"
            onClick={props.onClick}>
            Q
        </div>
    );

}

export default QuizBtn;