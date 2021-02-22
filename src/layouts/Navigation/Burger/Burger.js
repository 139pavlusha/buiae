import React, { Component } from 'react';
import './Burger.scss';

export default class Burger extends Component {

    render() {
        return (
            <div className="burger">
                <div className={this.props.burgerClass}></div>
            </div>
        );
    }
}
