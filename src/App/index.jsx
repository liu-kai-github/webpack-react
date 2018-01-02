import React, {Component} from 'react';
import logo from './logo.svg';
import {app, appLogo, appHeader, appTitle, appIntro} from './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={app}>
                <header className={appHeader}>
                    <img
                        src={logo}
                        className={appLogo}
                        alt="logo"
                    />
                    <h1 className={appTitle}>Welcome to React</h1>
                </header>
                <p className={appIntro}>
                    To get started, edit <code>src/App/index.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
