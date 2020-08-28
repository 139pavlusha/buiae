import React, { Component } from 'react';
import './LangSwitch.scss';

import engIMG from './images/eng.png';
import arbIMG from './images/arb.jpg';
import frcIMG from './images/frc.png';
import sprites from '../../../images/icons-sprite.svg';

export default class LangSwitch extends Component {

    state = {
        open: false,
        currentLang: {
            name: 'English',
            icon: engIMG
        },
        othersLang: [
            {
                name: 'Arabian',
                icon: arbIMG
            },
            {
                name: 'France',
                icon: frcIMG
            }
        ]
    }

    setCurLang = (name) => {
        if (name === 'English') {
            this.setState({
                currentLang: { name: 'English', icon: engIMG },
                othersLang: [
                    { name: 'Arabian', icon: arbIMG },
                    { name: 'France', icon: frcIMG }
                ]
            });
        }
        if (name === 'Arabian') {
            this.setState({
                currentLang: { name: 'Arabian', icon: arbIMG },
                othersLang: [
                    { name: 'English', icon: engIMG },
                    { name: 'France', icon: frcIMG }
                ]
            });
        }
        if (name === 'France') {
            this.setState({
                currentLang: { name: 'France', icon: frcIMG },
                othersLang: [
                    { name: 'Arabian', icon: arbIMG },
                    { name: 'English', icon: engIMG }
                ]
            });
        }
        this.setState({ open: false });
    }

    switch = () => {
        const { open } = this.state;
        this.setState({ open: !open });
    }

    drawAngle(open) {
        if (open)
            return (
                <svg class="drop__angle drop__angle--up">
                    <use href={sprites + "#angle-down"} />
                </svg >
            );
        else
            return (
                <svg class="drop__angle">
                    <use href={sprites + "#angle-down"} />
                </svg >
            );
    }

    drawItems = (open) => {
        const { currentLang, othersLang } = this.state;
        if (!open)
            return (
                <div className="drop__list">
                    <div className="drop__item drop__item--last" onClick={this.switch}>
                        <img className="drop__img" src={currentLang.icon} alt="flag" />
                        <p className="drop__lang-name">{currentLang.name}</p>
                        {this.drawAngle(this.state.open)}
                    </div>
                </div>
            );
        else
            return (
                <div className="drop__list drop__list--open">
                    <div className="drop__item" onClick={this.switch}>
                        <img className="drop__img" src={currentLang.icon} alt="flag" />
                        <p className="drop__lang-name">{currentLang.name}</p>
                        {this.drawAngle(this.state.open)}
                    </div>
                    <div className="drop__item" onClick={() => this.setCurLang(othersLang[0].name)}>
                        <img className="drop__img" src={othersLang[0].icon} alt="flag" />
                        <p className="drop__lang-name">{othersLang[0].name}</p>
                        {/* {this.drawAngle(this.state.open)} */}
                    </div>
                    <div className="drop__item drop__item--last" onClick={() => this.setCurLang(othersLang[1].name)}>
                        <img className="drop__img" src={othersLang[1].icon} alt="flag" />
                        <p className="drop__lang-name">{othersLang[1].name}</p>
                        {/* {this.drawAngle(this.state.open)} */}
                    </div>
                </div>
            );
    }

    render() {
        return (
            <div className="drop">
                {this.drawItems(this.state.open)}
            </div>
        );
    }
}
