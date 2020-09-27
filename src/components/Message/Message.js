import React, { Component } from 'react';
import './Message.scss';

import iconIMG from './images/message.png';
import logoIMG from '../../images/black-logo.png';
import crossIMG from './images/cross.png';
import Button from '../../layouts/Button/Button';

import sendData from './sendData';

export default class Message extends Component {

    state = {
        showForm: false,
        name: '',
        email: '',
        message: '',
        country: ''
    }

    submitData = () => {
        const { name, email, message, country } = this.state;
        const newRow = { Name: name, Email: email, Message: message, Country: country };
        console.log(newRow);
        sendData(newRow);
    }

    changeName = (e) => {
        this.setState({ name: e.target.value });
    }
    changeEmail = (e) => {
        this.setState({ email: e.target.value });
    }
    changeCountry = (e) => {
        this.setState({ country: e.target.value });
    }
    changeMessage = (e) => {
        this.setState({ message: e.target.value });
    }

    drawMessage = (showForm) => {
        if (showForm) {
            return (
                <div className="message__form">
                    <div className="message__header">
                        <img className="message__logo" src={logoIMG} alt="logo" />
                        <img className="message__cross" src={crossIMG} alt="message cross" onClick={this.changeMode} />
                    </div>

                    <h3 className="message__title">Please left your message or question and we will answer it. But <span className="red-text"> you must be sure to specify your phone number or email </span> so that we can get touch with you.</h3>

                    <form className="message__fields" action="#">
                        <input onChange={this.changeEmail} value={this.state.email} className="message__field" type="text" placeholder="Enter your email or phone number" />
                        <input onChange={this.changeName} value={this.state.name} className="message__field" type="text" placeholder="Enter full name" />
                        <input onChange={this.changeCountry} value={this.state.country} className="message__field" type="text" placeholder="Enter your country" />
                        <input onChange={this.changeMessage} value={this.state.message} className="message__field" type="text" placeholder="Enter your question or message" />
                        <div className="message__button" onClick={this.submitData}>
                            <Button text="Send message" />
                        </div>
                    </form>
                </div>
            );
        } else {
            return (
                <div className="message__icon" onClick={this.changeMode}>
                    <img className="message__img" src={iconIMG} alt="message icon" />
                </div>
            );
        }
    }

    changeMode = () => {
        const { showForm } = this.state;
        this.setState({ showForm: !showForm });
    }

    render() {
        return (
            <div className="message">
                {this.drawMessage(this.state.showForm)}
            </div>
        );
    }
}
