import React, { Component } from 'react';
import Frame from '../structure/Frame';
import Navbar from '../structure/Navbar';
// importing the base style
import '../../style.css';
import WindowManager from '../../model/WindowManager';
import FlashcardRepository from '../../model/FlashcardRepository';

/* 
 * The outermost frame of the app, it contains the navbar, and 
 * the window that renders the various views (home, create, edit, review).
 */
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deckList: ["latin", "spanish", "plants", 
            "bees", "your friend's names", "japanese",
            "a really really really long title, like super long bro", 
            "german", "bugs"]
        }

        this.manager = new WindowManager();
        this.repo = new FlashcardRepository(this.state.deckList);
        this.res = {
            manager: this.manager, 
            repo: this.repo,
        }
    }

    render() {
        /*
         * Possibly add some way to show what deck you are editing, etc., as well as 
         * a 'home' button to return to the main screen? 
         */
        return <div className="App">
            <Frame deckList={this.state.deckList} res={this.res}/>
        </div>
    }

}

export default App