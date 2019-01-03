import React, { Component } from 'react';
import View from './View';
import './style.css';

/*
 * The window that allows the editing of flashcards...
 */
class Edit extends Component {

    constructor(props) {
        super(props);

        this.props = props

        this.state = {
            // whether or not we are currently editing a flashcard...
            editing: false,
            flashcardList: props.flashcardList,
            cardToEdit: {}
        }

        this.displayEditModal = this.displayEditModal.bind(this);
        this.wrapFlashcardList = this.wrapFlashcardList.bind(this);
    }

    /*
     * Display the modal for editing the selected flashcard.  
     */
    displayEditModal(flashcard) {
        this.setState((state) => {
            state.editing = !state.editing;
            state.cardToEdit = flashcard;
            return state;
        })
    }

    

    /*
    * Wrap an individual flashcard as an html element. 
    */
    wrapFlashcard(fields, index) {
        return (
            <div className="brick" key={index}>
                <div className="card flashcard" onClick={() => this.displayEditModal(fields)}>
                    <div className="flashcard-prompt">
                        {fields.prompt}
                    </div>
                    <div className="flashcard-button">
                    </div>
                </div>
            </div>
        );
    };

    /*
    * Wrap the flashcard list (each deck as an element)
    */
    wrapFlashcardList(flashcardList) {
        return flashcardList.map((fields, index) => this.wrapFlashcard(fields, index)); 
    }

    render() {
        const flashcardElementList = this.wrapFlashcardList(this.state.flashcardList);

        return <View flashcards={flashcardElementList} 
            manager={this.props.manager} 
            editing={this.state.editing}
            flashcard={this.state.cardToEdit}/>;
    }

}



export default Edit;