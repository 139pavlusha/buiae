import React, { Component } from 'react';
import './Message.scss';

import iconIMG from './images/message.png';
import logoIMG from '../../images/black-logo.png';
import crossIMG from './images/cross.png';
import Button from '../../layouts/Button/Button';

export default class Message extends Component {

    state = {
        showForm: false
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
                        <input className="message__field" type="text" placeholder="Enter your email or phone number" />
                        <input className="message__field" type="text" placeholder="Enter full name" />
                        <input className="message__field" type="text" placeholder="Enter your country" />
                        <input className="message__field" type="text" placeholder="Enter your question or message" />
                        <div className="message__button">
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
