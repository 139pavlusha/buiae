import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './Info.scss';

import poltavaIMG from './images/poltava.jpg';

// --------------------LANG--------------------------

import ENG from '../../../lang/eng/Poltava';
import FRA from '../../../lang/fra/Poltava';
import ARB from '../../../lang/arb/Poltava';

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
            <div className="poltava-about">
                <h2 className="poltava-about__title">{info.title}</h2>
                <p className="poltava-about__article">
                    <img src={poltavaIMG} className="poltava-about__img" alt="About Poltava image" />
                    {info.article}
                </p>
                <div class="poltava-about__video">
                    <ReactPlayer url={info.link} controls={true} width="100%" height="100%" />
                </div>
            </div>
        );
    }
}