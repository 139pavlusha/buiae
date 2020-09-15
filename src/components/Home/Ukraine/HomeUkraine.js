import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './HomeUkraine.scss';

import bgIMG from './images/bg.jpeg';
import logoIMG from './images/white-logo.png';
import Button from '../../../layouts/Button/Button';


// --------------------LANG--------------------------
import ENG from '../../../lang/eng/Home';
import FRA from '../../../lang/fra/Home';
import ARB from '../../../lang/arb/Home';

const LANG = localStorage.getItem('LANG');

let ukraine;
if (LANG === 'France') {
    ukraine = FRA.ukraine;
}
else if (LANG === 'Arabian') {
    ukraine = ARB.ukraine;
}
else {
    ukraine = ENG.ukraine;
}
// --------------------LANG--------------------------


export default class HomeUkraine extends Component {
    render() {
        return (
            <div className="home-ua">
                <img className="home-ua__bg" src={bgIMG} alt="Ukraine background" />
                <div className="home-ua__bg home-ua__bg--opacity"></div>

                <div className="home-ua__block">
                    <img className="home-ua__logo" src={logoIMG} alt="Ukraine logo" />
                    <h3 className="home-ua__title">{ukraine.title}</h3>
                    <p className="home-ua__text">{ukraine.text}</p>
                    <NavLink to="/ukraine">
                        <div className="home-ua__button">
                            <Button text={ukraine.button} />
                        </div>
                    </NavLink>
                </div>
            </div>
        );
    }
}
