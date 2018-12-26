import React, { Component } from 'react';
import Frame from '../structure/Frame';
// importing the base style
import '../../style.css';
import WindowManager from '../../model/WindowManager';

/* 
 * The outermost frame of the app, it contains the navbar, and 
 * the window that renders the various views (home, create, edit, review).
 */
class App extends Component {
    render() {
        /*
         * Possibly add some way to show what deck you are editing, etc., as well as 
         * a 'home' button to return to the main screen? 
         */
        const manager = new WindowManager();
        return <div className="App">
            <Frame manager={manager}/>
        </div>
    }
}

export default App