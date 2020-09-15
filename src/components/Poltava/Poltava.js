import React, { Component } from 'react';

import Banner from './Banner/Banner';
import Universities from './Universities/Universities';
import Slider from '../../layouts/Slider/Slider';
import Footer from '../Footer/Footer';
import Info from './Info/Info';
import Message from '../Message/Message';

import IMG1 from '../../layouts/Slider/imagesPl/1.jpg';
import IMG2 from '../../layouts/Slider/imagesPl/2.jpg';
import IMG3 from '../../layouts/Slider/imagesPl/3.jpg';
import IMG4 from '../../layouts/Slider/imagesPl/4.jpg';
import IMG5 from '../../layouts/Slider/imagesPl/5.jpg';
import IMG6 from '../../layouts/Slider/imagesPl/6.jpg';
import IMG7 from '../../layouts/Slider/imagesPl/7.jpg';


const images = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7];

export default class Poltava extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Universities />
                <Info />
                <Slider images={images} />
                <Footer />
                <Message />
            </div>
        );
    }
}
