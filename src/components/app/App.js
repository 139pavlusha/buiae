import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Home from '../Home/Home';
import Ukraine from '../Ukraine/Ukraine.js';
import Poltava from '../Poltava/Poltava.js';
import AboutUs from '../AboutUs/AboutUs';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <ScrollToTop />
                    <Route exact path="/" render={() => <Redirect to="/home" />} />
                    <Route path="/home" render={() => <Home />} />
                    <Route path="/ukraine" render={() => <Ukraine />} />
                    <Route path="/poltava" render={() => <Poltava />} />
                    <Route path="/about" render={() => <AboutUs />} />
                </div>
            </Router>
        )
    }
}
