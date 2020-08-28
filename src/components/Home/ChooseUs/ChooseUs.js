import React, { Component } from 'react';
import './ChooseUs.scss';

import ChooseItem from './ChooseItem/ChooseItem';

import worldIMG from './images/world.png';
import hatIMG from './images/hat.png';
import supportIMG from './images/support.png';
import bookIMG from './images/book.png';

export default class ChooseUs extends Component {
    render() {

        const text = 'Our company is an intermediary between a university and a student. We will help solve your problems with life in Ukraine. And of course we will help to get an education. Our company has many people who know foreign languages. Such as: Ukrainian, Russian, English, French and Arabic.';

        return (
            <div className="home-choose">
                <h2 className="home-choose__title">Why you should choose education with us?</h2>

                <div className="home-choose__list">
                    <ChooseItem caption="Many univercities" text={text} img={hatIMG} />
                    <ChooseItem caption="Good education" text={text} img={bookIMG} />
                    <ChooseItem caption="International company" text={text} img={worldIMG} />
                    <ChooseItem caption="Supporting our students" text={text} img={supportIMG} />
                </div>
            </div>
        );
    }
}
