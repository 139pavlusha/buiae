import React, { Component } from 'react';
import './Slider.scss';

import SSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Slider extends Component {

    renderSlides() {
        let list = [];
        this.props.images.forEach(element => {
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
