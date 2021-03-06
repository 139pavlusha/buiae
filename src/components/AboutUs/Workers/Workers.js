import React, { Component } from 'react';
import './Workers.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import fbIMG from '../../../images/fb.png';
import youtubeIMG from '../../../images/youtube.png';
import instIMG from '../../../images/inst.png';

import azizIMG from './images/aziz.jpg';

// --------------------LANG--------------------------

import ENG from '../../../lang/eng/About';
import FRA from '../../../lang/fra/About';
import ARB from '../../../lang/arb/About';

const LANG = localStorage.getItem('LANG');

let workers;
if (LANG === 'France') {
    workers = FRA.workers;
}
else if (LANG === 'Arabian') {
    workers = ARB.workers;
}
else {
    workers = ENG.workers;
}

// --------------------LANG--------------------------


const images = [azizIMG, azizIMG, azizIMG];
const slides = workers.slides;

export default class Workers extends Component {

    renderSlides = (slides) => {
        let arr = [];
        slides.forEach((element, idx) => {
            arr.push(
                <div className="workers__post">
                    <h2 className="workers__caption">{element.caption}</h2>
                    <div className="workers__container">
                        <div className="workers__div">
                            <img src={images[idx]} className="workers__img" alt="avatar" />
                        </div>
                        <p className="workers__article">
                            {element.article}
                            <div className="workers__socials">
                                <a class="workers__link" href="https://www.facebook.com/BUIAE-Education-112314403469057/" target="_blank" >
                                    <img className="workers__icon" src={fbIMG} alt="facebook icon" />
                                </a>
                                <a class="workers__link" href="https://www.instagram.com/buiae_education/" target="_blank" >
                                    <img className="workers__icon" src={instIMG} alt="instagram icon" />
                                </a>
                                <a class="workers__link" href="https://www.youtube.com/channel/UCq6SfHu1ZyV0h8LqSrXee9Q" target="_blank" >
                                    <img className="workers__icon" src={youtubeIMG} alt="youtube icon" />
                                </a>
                            </div>
                        </p>
                    </div>
                </div>
            );
        });
        return arr;
    }

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            className: "worker",
            // responsive: [
            //     {
            //         breakpoint: 1024,
            //         settings: {
            //             arrows: false
            //         }
            //     }]
        }

        return (
            <div className="workers">
                <h2 className="workers__title">{workers.title}</h2>
                <div className="workers__slider">
                    <Slider {...settings}>
                        {this.renderSlides(slides)}
                    </Slider>
                </div>
            </div>
        )
    }
}
