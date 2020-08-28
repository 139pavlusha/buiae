import React, { Component } from 'react'
import './Button.scss';

export default class Button extends Component {

    render() {
        const { text } = this.props;

        return (
            <div className="button">
                {text}
            </div>
        );
    }
}
