import React, { Component } from 'react';
import './ChooseUs.scss';

import ChooseItem from './ChooseItem/ChooseItem';

import worldIMG from './images/world.png';
import hatIMG from './images/hat.png';
import supportIMG from './images/support.png';
import bookIMG from './images/book.png';


// --------------------LANG--------------------------
import ENG from '../../../lang/eng/Home';
import FRA from '../../../lang/fra/Home';
import ARB from '../../../lang/arb/Home';

const LANG = localStorage.getItem('LANG');

let chooseUs;
if (LANG === 'France') {
    chooseUs = FRA.chooseUs;
}
else if (LANG === 'Arabian') {
    chooseUs = ARB.chooseUs;
}
else {
    chooseUs = ENG.chooseUs;
}

// --------------------LANG--------------------------


export default class ChooseUs extends Component {
    render() {

        return (
            <div className="home-choose">
                <h2 className="home-choose__title">{chooseUs.title}</h2>

                <div className="home-choose__list">
                    <ChooseItem caption={chooseUs.chooseItem1.caption} text={chooseUs.chooseItem1.text} img={hatIMG} />
                    <ChooseItem caption={chooseUs.chooseItem2.caption} text={chooseUs.chooseItem2.text} img={bookIMG} />
                    <ChooseItem caption={chooseUs.chooseItem3.caption} text={chooseUs.chooseItem3.text} img={worldIMG} />
                    <ChooseItem caption={chooseUs.chooseItem4.caption} text={chooseUs.chooseItem4.text} img={supportIMG} />
                </div>
            </div>
        );
    }
}
