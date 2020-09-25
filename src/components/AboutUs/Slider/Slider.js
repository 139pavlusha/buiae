import React, { Component } from 'react';
import './Slider.scss';

import SSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IMG1 from './images/1.jpeg';
import IMG2 from './images/2.jpeg';
import IMG3 from './images/3.jpeg';
import IMG4 from './images/4.jpeg';
import IMG5 from './images/5.jpeg';
import IMG6 from './images/6.jpeg';
import IMG7 from './images/7.jpeg';
import IMG8 from './images/8.jpeg';
import IMG9 from './images/9.jpeg';
const images = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9];

export default class Slider extends Component {

    renderSlides() {
        let list = [];
        images.forEach(element => {
            list.push(
                <div className="about-slider__item">
                    <img
                        className="about-slider__img"
                        src={element}
                        alt="Slider Item"
                    />
                </div>
            );
        });
        return list;
    }

    render() {

        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 200,
            autoplaySpeed: 5000,
            cssEase: "linear",
            arrows: true,
            className: "about",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        arrows: false
                    }
                }]
        }

        return (
            <div className="grey-bg">
                <div className="about-slider">
                    <SSlider {...settings}>
                        {this.renderSlides()}
                    </SSlider>
                </div>
            </div>
        )
    }
}
