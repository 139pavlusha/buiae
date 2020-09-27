import React, { Component } from 'react';
import './Info.scss';

import educationIMG from './images/education.png';


// --------------------LANG--------------------------

import ENG from '../../../lang/eng/About';
import FRA from '../../../lang/fra/About';
import ARB from '../../../lang/arb/About';

const LANG = localStorage.getItem('LANG');

let info;
if (LANG === 'France') {
    info = FRA.info;
}
else if (LANG === 'Arabian') {
    info = ARB.info;
}
else {
    info = ENG.info;
}

// --------------------LANG--------------------------


export default class Info extends Component {
    render() {
        return (
            <div className="about-info">
                <h2 className="about-info__title">{info.title}</h2>
                <div className="about-info__container">
                    <img src={educationIMG} className="about-info__img" alt="About company" />
                    <p className="about-info__article">{info.article}</p>
                </div>
            </div>
        )
    }
}
