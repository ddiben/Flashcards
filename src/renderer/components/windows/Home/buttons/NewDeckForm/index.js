import React, { Component } from 'react';
import './style.css';

class NewDeckForm extends Component {

    constructor(props) {
        super(props);

        // The field of the form
        this.state = {
            title: ""
        }

        this.onClick = props.onClick;
        this.handleChange = this.handleChange.bind(this);
    }

    /*
     * Track changes to the form's input. 
     */
    handleChange(e) {
        e.persist();
        this.setState((state) => {
            state.title = e.target.value;
            return state;
        });
    }

    render() {
        console.log(this.state.title);
        return (
            <div className="brick">
                <div id="new-deck-form" className="card deck brick">
                    <textarea id="ndf-title" className="deck-title"                         
                        onChange={this.handleChange}
                        value={this.state.title}>
                    </textarea>
                    <div className="ndf-btns">
                        <div id="ndf-create-btn" onClick={() => this.onClick(this.state.title)}>+</div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default NewDeckForm;