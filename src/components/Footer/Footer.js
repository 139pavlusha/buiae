import React, { Component } from 'react';
import './Footer.scss';

import fbIMG from '../../images/fb.png';
import youtubeIMG from '../../images/youtube.png';
import instIMG from '../../images/inst.png';
import logoIMG from '../../images/white-logo.png';

import whats from './images/whats.png';
import telegram from './images/telegram.png';
import viber from './images/viber.png';

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="footer">
                <img className="footer__logo" src={logoIMG} alt="logo" />

                <div className="footer__phones margin-right">
                    <div className="phone__block">
                        <div className="phone__container">
                            <img className="phone__img" src={viber} alt="viber icon" />
                            <img className="phone__img" src={whats} alt="what's up icon" />
                            <img className="phone__img" src={telegram} alt="tg icon" />
                            <p className="phone__number">+380669089540</p>
                        </div>
                        <div className="phone__desc">
                            <p>English</p>
                            <p>Українська</p>
                            <p>Русский</p>
                        </div>
                    </div>
                    <div className="phone__block">
                        <div className="phone__container">
                            <img className="phone__img" src={viber} alt="viber icon" />
                            <img className="phone__img" src={whats} alt="what's up icon" />
                            <img className="phone__img" src={telegram} alt="tg icon" />
                            <p className="phone__number">+380733232280</p>
                        </div>
                        <div className="phone__desc">
                            <p>Français</p>
                            <p>العربية</p>
                        </div>
                    </div>
                </div>

                <div className="socials">
                    <a class="socials__link" href="https://www.facebook.com/BUIAE-Education-112314403469057/" target="_blank" >
                        <img className="socials__img" src={fbIMG} alt="facebook icon" />
                    </a>
                    <a class="socials__link" href="https://www.instagram.com/buiae_education/" target="_blank" >
                        <img className="socials__img" src={instIMG} alt="instagram icon" />
                    </a>
                    <a class="socials__link" href="https://www.youtube.com/channel/UCq6SfHu1ZyV0h8LqSrXee9Q" target="_blank" >
                        <img className="socials__img" src={youtubeIMG} alt="youtube icon" />
                    </a>
                </div>
            </footer>
        );
    }
}
