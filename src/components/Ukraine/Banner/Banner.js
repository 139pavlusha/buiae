import React, { Component } from 'react';
import './Banner.scss';

import Info from './Info/Info';
import Navigation from '../../../layouts/Navigation/Navigation';

import bgIMG from './images/bg.jpg';

export default class Banner extends Component {
    render() {
        return (
            <div className="ukraine-banner">
                <Navigation />
                <img src={bgIMG} className="ukraine-banner__bg" alt="ukraine-banner BG" />

                <div className="ukraine-banner__info">
                    <Info />
                </div>
            </div>
        );
    }
}
