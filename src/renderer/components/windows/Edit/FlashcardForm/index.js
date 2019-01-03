import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import './style.css';

/*
 * Components dawg.
 */

class FlashcardForm extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentWillReceiveProps(newProps) {
        this.show = newProps.show;
    }

    render() {

        if (this.show) {
            return (
                <div className='modal-window'>
                    <div className="modal-content card flashcard">
                        <div className="fc-form">
                            <label>
                                prompt: 
                                <input className="fc-prompt-input"></input>
                            </label>
                            
                            <label>
                                definitions: 
                                <div className="fc-definition-container">
                                    <div>
                                        <div id="fc-new-definition-btn">+</div>
                                    </div>
                                    
                                    <div className="fc-definitions">
                                        <div id="def-input_0" rows="1" className="fc-definition-input">
                                            <Textarea /> 
                                        </div>
                                    </div>
                                </div>
                            </label>
                            
                            <label>
                                usage:
                                <input className="fc-usage-input"></input>
                            </label>
                            
                            <label>
                                dtq:
                                {/* how many days until it is in a quiz...*/}
                                <input className="fc-dtq-input"></input> 
                            </label>
                            <div className="fc-form-btn-container">
                                <div id="fc-form-cancel-btn">
                                    X
                                </div>
                                <div id="fc-form-commit-btn">
                                    V
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <div></div>;
        }

    }

}

export default FlashcardForm;