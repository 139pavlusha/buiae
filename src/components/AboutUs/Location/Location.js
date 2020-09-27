import React, { Component } from 'react';
import './Location.scss';

import officeIMG from './images/office.jpeg';


// --------------------LANG--------------------------

import ENG from '../../../lang/eng/About';
import FRA from '../../../lang/fra/About';
import ARB from '../../../lang/arb/About';

const LANG = localStorage.getItem('LANG');

let location;
if (LANG === 'France') {
    location = FRA.location;
}
else if (LANG === 'Arabian') {
    location = ARB.location;
}
else {
    location = ENG.location;
}

// --------------------LANG--------------------------


export default class Location extends Component {
    render() {
        return (
            <div className="about-location">
                <h2 className="about-location__title">{location.title}</h2>
                <img className="about-location__img" src={officeIMG} alt=" Office" />
                <p className="about-location__article">{location.article}</p>
            </div>
        );
    }
}
