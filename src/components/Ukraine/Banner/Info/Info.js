import React, { Component } from 'react';
import './Info.scss';

import Button from '../../../../layouts/Button/Button';

export default class Info extends Component {
    render() {
        return (
            <div className="ukraine-info">
                <h2 className="ukraine-info__name">British-Ukrainian Agency International Agency of Ukraine</h2>
                <h1 className="ukraine-info__main-info">Our company works with Ukrainian universities. We want to provide you with a higher education in the center of Europe</h1>

                <div className="ukraine-info__button">
                    <Button text="Learn More" />
                </div>
            </div>
        );
    }
}
