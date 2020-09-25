import React, { Component } from 'react';
import './Info.scss';

import educationIMG from './images/education.png';

export default class Info extends Component {
    render() {
        return (
            <div className="about-info">
                <h2 className="about-info__title">What does our company do?</h2>
                <div className="about-info__container">
                    <img src={educationIMG} className="about-info__img" alt="About company" />
                    <p className="about-info__article">Hey. We want to offer you a good education in our country. Ukraine is a country of opportunities and a bright future. You have a wonderful opportunity to get higher education in the center of Europe. After which you will be able to find a job by publicity and you will have a bright future. Our company is an intermediary between a university and a student. We will help solve your problems with life in Ukraine. And of course we will help to get an education. Our company has many people who know foreign languages. Such as: Ukrainian, Russian, English, French and Arabic.</p>
                </div>
            </div>
        )
    }
}
