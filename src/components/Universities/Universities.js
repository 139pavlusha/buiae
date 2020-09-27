import React, { Component } from 'react';
import Navigation from '../../layouts/Navigation/Navigation';
import Footer from '../Footer/Footer';
import Message from '../Message/Message';
import './Universities.scss';

export default class Universities extends Component {

    renderUniversities = (universities, images) => {
        let arr = [];
        universities.forEach((item, idx) => {
            arr.push(
                <div className="universities__item">
                    <img className="universities__img" src={images[idx]} alt="universities img" />
                    <h3 className="universities__caption">{item.caption}</h3>
                    <p className="universities__article">{item.text}</p>
                </div>
            );
        });
        return arr;
    }

    render() {
        return (
            <div>
                <div style={{ background: "#000" }}>
                    <Navigation />
                </div>
                <div className="universities">
                    {this.renderUniversities(this.props.universities, this.props.images)}
                </div>
                <Footer />
                <Message />
            </div>
        );
    }
}
