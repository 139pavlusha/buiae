import React, { Component } from 'react';
import './Info.scss';

import Button from '../../../../layouts/Button/Button';

// --------------------LANG--------------------------

import ENG from '../../../../lang/eng/Ukraine';
import FRA from '../../../../lang/fra/Ukraine';
import ARB from '../../../../lang/arb/Ukraine';

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
            <div className="ukraine-info">
                <h2 className="ukraine-info__name">{info.name}</h2>
                <h1 className="ukraine-info__main-info">{info.mainInfo}</h1>

                <div className="ukraine-info__button">
                    <Button text={info.button} />
                </div>
            </div>
        );
    }
}