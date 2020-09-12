import React, { Component } from 'react';

import Banner from './Banner/Banner';
import Movie from './Movie/Movie';
import Universities from './Universities/Universities';
import Slider from '../../layouts/Slider/Slider';
import Footer from '../../components/Footer/Footer';

import IMG1 from '../../layouts/Slider/imagesUa/1.jpg';
import IMG2 from '../../layouts/Slider/imagesUa/2.jpg';
import IMG3 from '../../layouts/Slider/imagesUa/3.jpg';
import IMG4 from '../../layouts/Slider/imagesUa/4.jpg';
import IMG5 from '../../layouts/Slider/imagesUa/5.jpg';
import IMG6 from '../../layouts/Slider/imagesUa/6.jpg';
import IMG7 from '../../layouts/Slider/imagesUa/7.jpg';
import IMG8 from '../../layouts/Slider/imagesUa/8.jpg';
import IMG9 from '../../layouts/Slider/imagesUa/9.jpg';
import IMG10 from '../../layouts/Slider/imagesUa/10.jpg';
import IMG11 from '../../layouts/Slider/imagesUa/11.jpg';
import IMG12 from '../../layouts/Slider/imagesUa/12.jpg';
import IMG13 from '../../layouts/Slider/imagesUa/13.jpg';
import IMG14 from '../../layouts/Slider/imagesUa/14.jpg';

const images = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9, IMG10, IMG11, IMG12, IMG13, IMG14];

export default class Ukraine extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Movie />
                <Universities />
                <Slider images={images} />
                <Footer />
            </div>
        );
    }
}
