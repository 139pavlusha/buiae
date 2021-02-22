import React, { Component } from 'react';
import './ChooseItem.scss';

export default class ChooseItem extends Component {
    render() {

        const { caption, text, img } = this.props;

        return (
            <div className="choose-item">
                <img className="choose-item__img" src={img} alt="choose-item icon" />
                <h3 className="choose-item__caption">{caption}</h3>
                <p className="choose-item__text">{text}</p>
            </div>
        );
    }
}
