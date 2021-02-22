import React, { Component } from 'react';
import './Question.scss';

import iconIMG from '../../../../images/BUIAE favicon.png';
import sprites from '../../../../images/icons-sprite.svg';

export default class Question extends Component {

    state = {
        open: false
    }

    switch = () => {
        const { open } = this.state;
        this.setState({ open: !open });
    }

    drawAnswer = (open) => {
        if (open) return (
            <p className="question__answer">{this.props.answer}</p>
        );
    }

    drawAngle = (open) => {
        if (open) {
            return (
                <svg class="question__angle question__angle--up">
                    <use href={sprites + "#angle-down"} />
                </svg >
            );
        }
        else {
            return (
                <svg class="question__angle">
                    <use href={sprites + "#angle-down"} />
                </svg >
            );
        }
    }

    render() {
        return (
            <li className="question">
                <img className="question__icon" src={iconIMG} alt="icon" />
                <h3 className="question__caption" onClick={this.switch} >{this.props.caption}</h3>
                <div className="question__button" onClick={this.switch}>
                    {this.drawAngle(this.state.open)}
                </div>

                {this.drawAnswer(this.state.open)}
            </li>
        );
    }
}
