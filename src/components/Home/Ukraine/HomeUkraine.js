import React, { Component } from 'react';
import './HomeUkraine.scss';

import bgIMG from './images/bg.jpeg';
import logoIMG from './images/white-logo.png';
import Button from '../../../layouts/Button/Button';

export default class HomeUkraine extends Component {
    render() {
        return (
            <div className="home-ua">
                <img className="home-ua__bg" src={bgIMG} alt="Ukraine background" />
                <div className="home-ua__bg home-ua__bg--opacity"></div>

                <div className="home-ua__block">
                    <img className="home-ua__logo" src={logoIMG} alt="Ukraine logo" />
                    <h3 className="home-ua__title">Ukraine</h3>
                    <p className="home-ua__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aperiam a? Veniam dolorum, ut dignissimos ipsam explicabo quis enim veritatis dolor ex. Quasi commodi asperiores tenetur modi quisquam sequi ab amet consectetur adipisicing elit. Laboriosam, aperiam a? Veniam dolorum, ut dignissimos ipsam explicabo quis enim veritatis dolor ex. Quasi commodi asperiores tenetur modi quisquam sequi ab!</p>
                    <div className="home-ua__button">
                        <Button text="Learn More" />
                    </div>
                </div>
            </div>
        );
    }
}
