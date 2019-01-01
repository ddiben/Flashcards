import React, { Component } from 'react';
import './style.css';

class NewDeckForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: "",
            flicker: true
        }
       
        // For the input field of the form (deck titles)
        this.inputRef = React.createRef();

        this.newDeckClick = props.newDeckClick;
        this.onClick = this.onClick.bind(this);
    }

    /*
     * Handling clicks of 'create' button.  
     */ 
    onClick(inputElement) {
        if (this.newDeckClick(inputElement.textContent)) {
            inputElement.textContent = "";
        }
    }

    render() {
        
        return (
            <div className="brick">
                <div id="new-deck-form" className="card deck brick">
                    <div id="ndf-title" className="deck-title"
                        ref={this.inputRef}             
                        contentEditable="true">
                    </div>
                    <div className="ndf-btns">
                        <div id="ndf-create-btn" onClick={() => this.onClick(this.inputRef.current)}>+</div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default NewDeckForm;