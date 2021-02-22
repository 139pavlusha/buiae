import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './Info.scss';

import Button from '../../../../layouts/Button/Button';


// --------------------LANG--------------------------

import ENG from '../../../../lang/eng/Home';
import FRA from '../../../../lang/fra/Home';
import ARB from '../../../../lang/arb/Home';

const LANG = localStorage.getItem('LANG');

let info;
if (LANG === 'France') {
    info = FRA.banner.info;
}
else if (LANG === 'Arabian') {
    info = ARB.banner.info;
}
else {
    info = ENG.banner.info;
}

// --------------------LANG--------------------------


export default class Info extends Component {
    render() {
        return (
            <div className="banner-info">
                <h2 className="banner-info__name">{info.name}</h2>
                <h1 className="banner-info__main-info">{info.mainInfo}</h1>

                <div className="banner-info__button">
                    <NavLink to="/about" >
                        <Button text={info.button} />
                    </NavLink>
                </div>
            </div>
        );
    }
}
