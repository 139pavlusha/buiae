import React, { Component } from 'react';
import './UniversitiesItem.scss';

import Button from '../../../../layouts/Button/Button';

export default class UniversitiesItem extends Component {

    render() {
        const { img, caption, button } = this.props;

        return (
            <div className="universities-banner__item">
                <img className="universities-banner__img" src={img} alt="universities-banner img" />
                <h3 className="universities-banner__caption">{caption}</h3>
                <div className="universities-banner__button">
                    <Button text={button} />
                </div>
            </div>
        )
    }
}
