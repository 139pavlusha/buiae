import React, { Component } from 'react';
import Navigation from '../../layouts/Navigation/Navigation';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import Workers from './Workers/Workers';
import Footer from '../Footer/Footer';
import Slider from './Slider/Slider';
import Location from './Location/Location';

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Info />
                <Workers />
                <Location />
                <Slider />
                <Footer />
            </div>
        );
    }
}
