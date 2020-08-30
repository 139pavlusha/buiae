import React, { Component } from 'react'
import './Navigation.scss';
import LogoIMG from './images/white-logo.png';

import Button from '../../layouts/Button/Button';
import LangSwitch from './LangSwitch/LangSwitch';
import Burger from './Burger/Burger';


// --------------------LANG--------------------------
import ENG from '../../lang/eng/Home';
import FRA from '../../lang/fra/Home';
import ARB from '../../lang/arb/Home';

const LANG = localStorage.getItem('LANG');

let navigation;
if (LANG === 'France') {
    navigation = FRA.navigation;
}
else if (LANG === 'Arabian') {
    navigation = ARB.navigation;
}
else {
    navigation = ENG.navigation;
}
// --------------------LANG--------------------------


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
                        <li className="nav__item">{navigation.poltava}</li>
                        <li className="nav__item">{navigation.ukraine}</li>
                        <li className="nav__item">{navigation.univercities}</li>
                        <li className="nav__item">{navigation.cities}</li>
                        <li className="nav__item">{navigation.about}</li>

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
