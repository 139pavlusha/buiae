import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Route,
    withRouter,
    Redirect,
} from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Home from '../Home/Home';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <ScrollToTop />
                    <Route exact path="/" render={() => <Redirect to="/home" />} />
                    <Route path="/home" render={() => <Home />} />
                </div>
            </Router>
        )
    }
}
