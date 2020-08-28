import React, { Component } from 'react'
import './Navigation.scss';
import LogoIMG from './images/white-logo.png';

import Button from '../../layouts/Button/Button';
import LangSwitch from './LangSwitch/LangSwitch';
import Burger from './Burger/Burger';

export default class Navigation extends Component {

    state = {
        open: false,
        navList: 'nav__list',
        navBlack: 'nav',
        burgerClass: 'burger__line'
    }

    switchMenu = () => {
        const { open } = this.state;
        if (open) {
            this.setState({ navList: 'nav__list', navBlack: 'nav', burgerClass: 'burger__line' });
        }
        else {
            this.setState({ navList: 'nav__list show-menu', navBlack: 'nav nav__black', burgerClass: 'burger__line close-burger' });
        }
        this.setState({ open: !open });
    }

    render() {
        return (
            <div className={this.state.navBlack}>

                <div className="nav__burger" onClick={this.switchMenu}>
                    <Burger burgerClass={this.state.burgerClass} />
                </div>

                <div className="nav__logo">
                    <img className="nav__img" src={LogoIMG} alt="logo" />
                </div>

                <div className="nav__right-container">
                    <ul className={this.state.navList}>
                        <li className="nav__item">Poltava</li>
                        <li className="nav__item">Ukraine</li>
                        <li className="nav__item">Universities</li>
                        <li className="nav__item">Cities</li>
                        <li className="nav__item">About us</li>

                    </ul>
                    <div className="nav__lang-switch">
                        <LangSwitch />
                    </div>

                    <div className="nav__button">
                        <Button text="Contact us" />
                    </div>
                </div>
            </div>
        );
    }
}
