import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Home from '../Home/Home';
import Ukraine from '../Ukraine/Ukraine.js';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <ScrollToTop />
                    <Route exact path="/" render={() => <Redirect to="/home" />} />
                    <Route path="/home" render={() => <Home />} />
                    <Route path="/ukraine" render={() => <Ukraine />} />
                </div>
            </Router>
        )
    }
}
