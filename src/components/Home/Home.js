import React, { Component } from 'react';

// import Navigation from '../../layouts/Navigation/Navigation';
import Banner from './Banner/Banner';
import ChooseUs from './ChooseUs/ChooseUs';
import HomeUkraine from './Ukraine/HomeUkraine';
import QuestionsList from './QuestionsList/QuestionsList';
import Footer from '../Footer/Footer';
import Message from '../Message/Message';

export default class Home extends Component {
    render() {
        return (
            <div>
                {/* <Navigation /> */}
                <Banner />
                <ChooseUs />
                <HomeUkraine />
                <QuestionsList />
                <Footer />
                <Message />
            </div>
        );
    }
}
