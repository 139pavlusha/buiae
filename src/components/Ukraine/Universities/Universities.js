import React, { Component } from 'react';
import './Universities.scss';

import bgIMG from './images/bg.jpg';
import kpiIMG from './images/kpi.jpg';
import shevIMG from './images/shev.jpg';
import karazinaIMG from './images/karazin.jpg';

import UniversitiesItem from './UniversitiesItem/UniversitiesItem';

// --------------------LANG--------------------------

import ENG from '../../../lang/eng/Poltava';
import FRA from '../../../lang/fra/Poltava';
import ARB from '../../../lang/arb/Poltava';

const LANG = localStorage.getItem('LANG');

let universities;
if (LANG === 'France') {
    universities = FRA.universities;
}
else if (LANG === 'Arabian') {
    universities = ARB.universities;
}
else {
    universities = ENG.universities;
}

// --------------------LANG--------------------------

export default class Universities extends Component {
    render() {
        return (
            <div className="universities-banner">
                <img className="universities-banner__bg" src={bgIMG} alt="universities-banner BG" />

                <h2 className="universities-banner__title">{universities.title}</h2>
                <div className="universities-banner__container">
                    <UniversitiesItem caption={universities.university1.caption} button={universities.university1.button} img={kpiIMG} />
                    <UniversitiesItem caption={universities.university2.caption} button={universities.university2.button} img={shevIMG} />
                    <UniversitiesItem caption={universities.university3.caption} button={universities.university3.button} img={karazinaIMG} />
                </div>
            </div>
        );
    }
}
