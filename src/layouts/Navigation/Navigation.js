import React, { Component } from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link';
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

                <NavLink to="/home">
                    <div className="nav__logo">
                        <img className="nav__img" src={LogoIMG} alt="logo" />
                    </div>
                </NavLink>

                <div className="nav__right-container">
                    <ul className={this.state.navList}>
                        {/* <NavLink to="/poltava"><li className="nav__item">{navigation.poltava}</li></NavLink> */}
                        <li className="nav__item"><NavLink to="/ukraine">{navigation.ukraine}</NavLink></li>
                        <li className="nav__item"><NavLink to="/universities">{navigation.univercities}</NavLink></li>
                        <li className="nav__item"><NavLink to="/cities">{navigation.cities}</NavLink></li>
                        <li className="nav__item"><NavLink to="/about">{navigation.about}</NavLink></li>

                    </ul >
                    <div className="nav__lang-switch" >
                        <LangSwitch bg={this.props.bg} />
                    </div>

                    <div className="nav__button">
                        <NavLink to="#footer">
                            <Button text={navigation.contact} />
                        </NavLink>
                    </div>
                </div >
            </div >
        );
    }
}
