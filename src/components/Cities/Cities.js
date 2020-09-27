import React, { Component } from 'react';

import Navigation from '../../layouts/Navigation/Navigation';
import Footer from '../Footer/Footer';
import Message from '../Message/Message';
import CityMenu from './CityMenu/CityMenu';

export default class Cities extends Component {
    render() {
        return (
            <div>
                <div style={{ background: "#000" }}>
                    <Navigation />
                </div>
                <CityMenu />
                <Footer />
                <Message />
            </div>
        );
    }
}