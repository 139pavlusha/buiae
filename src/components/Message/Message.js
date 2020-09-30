import React, { Component } from 'react';
import './Message.scss';

import iconIMG from './images/message.png';
import logoIMG from '../../images/black-logo.png';
import crossIMG from './images/cross.png';
import Button from '../../layouts/Button/Button';


// --------------------LANG--------------------------

import ENG from '../../lang/eng/Message';
import FRA from '../../lang/fra/Message';
import ARB from '../../lang/arb/Message';

const LANG = localStorage.getItem('LANG');

let message;
if (LANG === 'France') {
    message = FRA;
}
else if (LANG === 'Arabian') {
    message = ARB;
}
else {
    message = ENG;
}

// --------------------LANG--------------------------


export default class Message extends Component {

    state = {
        showForm: false,
        name: '',
        email: '',
        message: '',
        country: '',

        disabled: true,
        submit: false
    }

    changeName = (e) => {
        this.setState({ name: e.target.value });
        this.checkSubmit();
    }
    changeEmail = (e) => {
        this.setState({ email: e.target.value });
        this.checkSubmit();
    }
    changeCountry = (e) => {
        this.setState({ country: e.target.value });
        this.checkSubmit();
    }
    changeMessage = (e) => {
        this.setState({ message: e.target.value });
        this.checkSubmit();
    }

    checkSubmit = () => {
        const { name, email, country } = this.state;
        if (name && email && country)
            this.setState({ disabled: false });
        else
            this.setState({ disabled: true });
    }

    drawMessage = (showForm) => {
        if (showForm) {
            return (
                <div className="message__form">
                    <div className="message__header">
                        <img className="message__logo" src={logoIMG} alt="logo" />
                        <img className="message__cross" src={crossIMG} alt="message cross" onClick={this.changeMode} />
                    </div>

                    <h3 className="message__title">{message.title.first} <span className="red-text"> {message.title.red} </span> {message.title.second} </h3>

                    <form className="message__fields" action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSdoHakS75fMY4EEHR4DCfoOwfP8swilSA9fL4doTvBbSwatxQ/formResponse" target="_self" method="POST" >
                        <input onChange={this.changeEmail} value={this.state.email} className="message__field" type="text" placeholder={message.form.email} name="entry.792795740" />
                        <input onChange={this.changeName} value={this.state.name} className="message__field" type="text" placeholder={message.form.name} name="entry.657139561" />
                        <input onChange={this.changeCountry} value={this.state.country} className="message__field" type="text" placeholder={message.form.country} name="entry.444916932" />
                        <input onChange={this.changeMessage} value={this.state.message} className="message__field" type="text" placeholder={message.form.message} name="entry.1027938696" />
                        <div className="message__button" onClick={this.submitData}>
                            {/* <Button text="Send message" /> */}
                            <input className="button" type="submit" value={message.form.button} disabled={this.state.disabled} onClick={this.clickSubmit} />
                        </div>
                    </form>
                </div >
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
