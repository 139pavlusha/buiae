import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './CityPage.scss';

import Navigation from '../../../layouts/Navigation/Navigation';
import Footer from '../../Footer/Footer';
import Button from '../../../layouts/Button/Button';
import Slider from './Slider/Slider';
import Message from '../../Message/Message';

export default class CityPage extends Component {
    render() {
        const info = this.props.info;
        return (
            <div>
                <div style={{ background: "#000" }}>
                    <Navigation bg="black" />
                </div>
                <div className="city">
                    <h2 className="city__title">{info.title}</h2>
                    <p className="city__article">
                        <img src={info.img} className="city__img" alt="City" />
                        {info.article}
                    </p>
                    <NavLink to={'/universities' + info.link}>
                        <div className="city__button">
                            <Button text={info.button} />
                        </div>
                    </NavLink>
                    <Slider images={info.slides} />
                    <Footer />
                    <Message />
                </div>
            </div>
        );
    }
}