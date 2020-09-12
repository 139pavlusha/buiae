import React, { Component } from 'react';
import './Slider.scss';

import SSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + 'slider__prev'}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}
export default class Slider extends Component {

    renderSlides(images) {
        let list = [];
        images.forEach(element => {
            list.push(
                <div className="slider__item">
                    <img
                        className="slider__img"
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
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            className: "slides",
            // responsive: [
            //     {
            //         breakpoint: 1024,
            //         settings: {
            //             arrows: false
            //         }
            //     }]
        }

        const { images } = this.props;
        return (
            <div className="slider">
                <SSlider {...settings}>
                    {this.renderSlides(images)}
                </SSlider>
            </div>
        );
    }
}


