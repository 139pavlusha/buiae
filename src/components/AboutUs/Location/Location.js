import React, { Component } from 'react';
import './Location.scss';

import officeIMG from './images/office.jpeg';

export default class Location extends Component {
    render() {
        return (
            <div className="about-location">
                <h2 className="about-location__title">Our office and location</h2>
                <img className="about-location__img" src={officeIMG} alt=" Office Image" />
                <p className="about-location__article">In our office, we will help you solve all the problems with housing study and admission in Ukraine. Our office is located in a beautiful city which is also called the spiritual capital of our country. And of course we will help to get an education. In our office there are many people who know foreign languages. Such as: Ukrainian, Russian, English, French and Arabic.</p>
            </div>
        )
    }
}
