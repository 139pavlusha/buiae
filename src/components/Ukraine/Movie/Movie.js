import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import './Movie.scss';

// --------------------LANG--------------------------

import ENG from '../../../lang/eng/Ukraine';
import FRA from '../../../lang/fra/Ukraine';
import ARB from '../../../lang/arb/Ukraine';

const LANG = localStorage.getItem('LANG');

let movie;
if (LANG === 'France') {
    movie = FRA.movie;
}
else if (LANG === 'Arabian') {
    movie = ARB.movie;
}
else {
    movie = ENG.movie;
}

// --------------------LANG--------------------------

export default class Movie extends Component {
    render() {
        return (
            <div className="ukraine-movie">
                <div className="ukraine-movie__post">
                    <h2 className="ukraine-movie__title">{movie.title}</h2>
                    <h3 className="ukraine-movie__subtitle">{movie.subtitle}</h3>
                    <p className="ukraine-movie__info">{movie.info1}</p>
                    <p className="ukraine-movie__info">{movie.info2}</p>
                </div>

                <div className="ukraine-movie__video">
                    <ReactPlayer url={movie.link} controls={true} width="100%" height="100%" />
                </div>
            </div>
        );
    }
}
