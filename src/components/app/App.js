import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Home from '../Home/Home';
import Ukraine from '../Ukraine/Ukraine.js';
import Poltava from '../Poltava/Poltava.js';
import AboutUs from '../AboutUs/AboutUs';
import Cities from '../Cities/Cities';
import CityPage from '../Cities/CityPage/CityPage';

import kyivIMG from '../Cities/CityMenu/images/kyiv.jpg';
import kharkovIMG from '../Cities/CityMenu/images/kharkov.jpg';
import dneprIMG from '../Cities/CityMenu/images/dnepr.jpg';
import odessaIMG from '../Cities/CityMenu/images/odessa.jpg';
import lvivIMG from '../Cities/CityMenu/images/lviv.jpg';
import slides from '../Cities/CityPage/slides';

import Universities from '../Universities/Universities';
import universitiesIMG from '../Universities/images/images';


// --------------------LANG--------------------------

import ENG from '../../lang/eng/Cities';
import FRA from '../../lang/fra/Cities';
import ARB from '../../lang/arb/Cities';

import ENGU from '../../lang/eng/Universities';
import FRAU from '../../lang/fra/Universities';
import ARBU from '../../lang/arb/Universities';

const LANG = localStorage.getItem('LANG');

let city, universities;
if (LANG === 'France') {
    city = FRA.city;
    universities = FRAU;
}
else if (LANG === 'Arabian') {
    city = ARB.city;
    universities = ARBU;
}
else {
    city = ENG.city;
    universities = ENGU;
}

// --------------------LANG--------------------------


console.log({ ...universities.kyiv, ...universities.kharkov, ...universities.dnepr, ...universities.odessa, ...universities.lviv });

city.kyiv.slides = slides.kyiv;
city.kharkov.slides = slides.kharkov;
city.lviv.slides = slides.lviv;
city.odessa.slides = slides.odessa;
city.dnepr.slides = slides.dnepr;

city.kyiv.img = kyivIMG;
city.kharkov.img = kharkovIMG;
city.lviv.img = lvivIMG;
city.dnepr.img = dneprIMG;
city.odessa.img = odessaIMG;

city.kyiv.link = '/kyiv';
city.kharkov.link = '/kharkov';
city.lviv.link = '/lviv';
city.odessa.link = '/odessa';
city.dnepr.link = '/dnepr';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <ScrollToTop />
                    <Route exact path="/" render={() => <Redirect to="/home" />} />
                    <Route path="/home" render={() => <Home />} />
                    <Route path="/ukraine" render={() => <Ukraine />} />
                    <Route path="/about" render={() => <AboutUs />} />
                    <Route path="/cities" render={() => <Cities />} />
                    <Route exact path="/universities" render={() => <Universities images={[...universitiesIMG.kyiv, ...universitiesIMG.kharkov, ...universitiesIMG.dnepr, ...universitiesIMG.odessa, ...universitiesIMG.lviv]} universities={[...universities.kyiv, ...universities.kharkov, ...universities.dnepr, ...universities.odessa, ...universities.lviv]} />} />

                    <Route path="/poltava" render={() => <Poltava />} />
                    <Route path="/kyiv" render={() => <CityPage info={city.kyiv} />} />
                    <Route path="/kharkov" render={() => <CityPage info={city.kharkov} />} />
                    <Route path="/odessa" render={() => <CityPage info={city.odessa} />} />
                    <Route path="/dnipro" render={() => <CityPage info={city.dnepr} />} />
                    <Route path="/lviv" render={() => <CityPage info={city.lviv} />} />

                    <Route path="/universities/kharkov" render={() => <Universities images={universitiesIMG.kharkov} universities={universities.kharkov} />} />
                    <Route path="/universities/kyiv" render={() => <Universities images={universitiesIMG.kyiv} universities={universities.kyiv} />} />
                    <Route path="/universities/lviv" render={() => <Universities images={universitiesIMG.lviv} universities={universities.lviv} />} />
                    <Route path="/universities/odessa" render={() => <Universities images={universitiesIMG.odessa} universities={universities.odessa} />} />
                    <Route path="/universities/dnepr" render={() => <Universities images={universitiesIMG.dnepr} universities={universities.dnepr} />} />

                </div>
            </Router>
        );
    }
}
