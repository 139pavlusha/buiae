import React, { Component } from 'react';
import './Universities.scss';

import bgIMG from './images/bg.jpg';
import puetIMG from './images/puet.jpg';
import umsaIMG from './images/umsa.jpg';
import tehIMG from './images/teh.jpg';

import UniversitiesItem from './UniversitiesItem/UniversitiesItem';

export default class Universities extends Component {
    render() {
        return (
            <div className="universities-banner">
                <img className="universities-banner__bg" src={bgIMG} alt="universities-banner BG" />

                <h2 className="universities-banner__title">Our Universities</h2>
                <div className="universities-banner__container">
                    <UniversitiesItem caption="Poltava University of Economics and Trade" button="Read More" img={puetIMG} />
                    <UniversitiesItem caption="Ukrainian Medical Stomatological Academy" button="Read More" img={umsaIMG} />
                    <UniversitiesItem caption="Poltava National Technical University" button="Read More" img={tehIMG} />
                </div>
            </div>
        );
    }
}
