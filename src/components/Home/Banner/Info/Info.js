import React, { Component } from 'react';
import './Info.scss';

import Button from '../../../../layouts/Button/Button';

export default class Info extends Component {
    render() {
        return (
            <div className="banner-info">
                <h2 className="banner-info__name">British-Ukrainian Agency International Agency of Ukraine</h2>
                <h1 className="banner-info__main-info">Our company works with Ukrainian universities. We want to provide you with a higher education in the center of Europe</h1>
                {/* <p className="banner-info__desc">Our company provides you with the opportunity to realize your goals. We invite you to study in the center of Europe, in a country in which there are many attractions</p> */}

                <div className="banner-info__button">
                    <Button text="Learn More" />
                </div>
            </div>
        );
    }
}
