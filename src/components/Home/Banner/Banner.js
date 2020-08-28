import React, { Component } from 'react';
import './Banner.scss';

import Info from './Info/Info';
import Navigation from '../../../layouts/Navigation/Navigation';

import bgIMG from './images/bg.jpeg';
import educationIMG from './images/education.png'

export default class Banner extends Component {
    render() {
        return (
            <div className="home-banner">
                <Navigation />
                <img src={bgIMG} className="home-banner__bg" alt="home-banner BG" />

                <div className="home-banner__info">
                    <Info />
                </div>

                <img src={educationIMG} className="home-banner__logo" alt="old-logo" />
            </div>
        );
    }
}
