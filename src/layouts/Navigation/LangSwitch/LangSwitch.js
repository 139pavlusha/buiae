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
        ],
        bg: this.props.bg
    }

    componentWillMount() {
        this.setLang();
    }

    setCurLang = (name) => {
        if (name === 'English') {
            localStorage.setItem('LANG', name);
            this.setState({
                currentLang: { name: 'English', icon: engIMG },
                othersLang: [
                    { name: 'Arabian', icon: arbIMG },
                    { name: 'France', icon: frcIMG }
                ]
            });
        }
        if (name === 'Arabian') {
            localStorage.setItem('LANG', name);
            this.setState({
                currentLang: { name: 'Arabian', icon: arbIMG },
                othersLang: [
                    { name: 'English', icon: engIMG },
                    { name: 'France', icon: frcIMG }
                ]
            });
        }
        if (name === 'France') {
            localStorage.setItem('LANG', name);
            this.setState({
                currentLang: { name: 'France', icon: frcIMG },
                othersLang: [
                    { name: 'Arabian', icon: arbIMG },
                    { name: 'English', icon: engIMG }
                ]
            });
        }
        this.setState({ open: false });
        window.location.reload();
    }

    switch = () => {
        const { open } = this.state;
        this.setState({ open: !open });
    }

    drawAngle(open) {
        if (open)
            return (
                <svg className="drop__angle drop__angle--up">
                    <use href={sprites + "#angle-down"} />
                </svg >
            );
        else
            return (
                <svg className="drop__angle">
                    <use href={sprites + "#angle-down"} />
                </svg >
            );
    }

    drawItems = (open) => {
        const { currentLang, othersLang } = this.state;

        if (!open)
            return (
                <div className={this.state.bg + ' drop__list'} >
                    <div className="drop__item drop__item--last" onClick={this.switch} >
                        <img className="drop__img" src={currentLang.icon} alt="flag" />
                        <p className="drop__lang-name">{this.translateLang(currentLang.name)}</p>
                        {this.drawAngle(this.state.open)}
                    </div>
                </div>
            );
        else
            return (
                <div className={this.state.bg + " drop__list drop__list--open"} >
                    <div className="drop__item" onClick={this.switch}>
                        <img className="drop__img" src={currentLang.icon} alt="flag" />
                        <p className="drop__lang-name">{this.translateLang(currentLang.name)}</p>
                        {this.drawAngle(this.state.open)}
                    </div>
                    <div className="drop__item" onClick={() => this.setCurLang(othersLang[0].name)}>
                        <img className="drop__img" src={othersLang[0].icon} alt="flag" />
                        <p className="drop__lang-name">{this.translateLang(othersLang[0].name)}</p>
                    </div>
                    <div className="drop__item drop__item--last" onClick={() => this.setCurLang(othersLang[1].name)}>
                        <img className="drop__img" src={othersLang[1].icon} alt="flag" />
                        <p className="drop__lang-name">{this.translateLang(othersLang[1].name)}</p>
                    </div>
                </div>
            );
    }

    translateLang = (name) => {
        if (name === 'English') return ('English');
        if (name === 'France') return ('Français');
        if (name === 'Arabian') return ('العربية');
    }

    setLang = () => {
        const { name } = this.state.currentLang;
        const LSname = localStorage.getItem('LANG');

        if (name !== LSname) {
            if (LSname === 'English') {
                this.setState({
                    currentLang: { name: 'English', icon: engIMG },
                    othersLang: [
                        { name: 'Arabian', icon: arbIMG },
                        { name: 'France', icon: frcIMG }
                    ]
                });
            }
            if (LSname === 'Arabian') {
                this.setState({
                    currentLang: { name: 'Arabian', icon: arbIMG },
                    othersLang: [
                        { name: 'English', icon: engIMG },
                        { name: 'France', icon: frcIMG }
                    ]
                });
            }
            if (LSname === 'France') {
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
    }

    render() {
        return (
            <div className="drop" >
                {this.drawItems(this.state.open)}
            </div>
        );
    }
}
