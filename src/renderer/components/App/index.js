import React, { Component } from 'react';
import Frame from '../structure/Frame';

/* 
 * The outermost frame of the app, it contains the navbar, and 
 * the window that renders the various views (home, create, edit, review).
 */

class App extends Component {
    render() {
        return <div className="App">
            <Frame/>
        </div>
    }
}

export default App