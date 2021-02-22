import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './CityMenu.scss';

import Button from '../../../layouts/Button/Button';

import poltavaIMG from './images/poltava.jpg';
import kyivIMG from './images/kyiv.jpg';
import kharkovIMG from './images/kharkov.jpg';
import dneprIMG from './images/dnepr.jpg';
import odessaIMG from './images/odessa.jpg';
import lvivIMG from './images/lviv.jpg';


// --------------------LANG--------------------------

import ENG from '../../../lang/eng/Cities';
import FRA from '../../../lang/fra/Cities';
import ARB from '../../../lang/arb/Cities';

const LANG = localStorage.getItem('LANG');

let cities;
if (LANG === 'France') {
    cities = FRA.menu;
}
else if (LANG === 'Arabian') {
    cities = ARB.menu;
}
else {
    cities = ENG.menu;
}

// --------------------LANG--------------------------


const images = [poltavaIMG, kyivIMG, kharkovIMG, dneprIMG, odessaIMG, lvivIMG];

export default class CityMenu extends Component {

    renderCities = () => {
        let arr = [];
        cities.forEach((item, idx) => {
            arr.push(
                <div className="cities__item">
                    <img className="cities__img" src={images[idx]} alt="cities img" />
                    <h3 className="cities__caption">{item.caption}</h3>
                    <p className="cities__article">{item.text}</p>
                    <NavLink to={item.link}>
                        <div className="cities__button">
                            <Button text={item.button} />
                        </div>
                    </NavLink>
                </div>
            );
        });
        return arr;
    }

    render() {
        return (
            <div className="cities">
                {this.renderCities()}
            </div>
        );
    }
}
