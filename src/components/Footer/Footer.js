import React, { Component } from 'react';
import './Footer.scss';

import fbIMG from '../../images/fb.png';
import youtubeIMG from '../../images/youtube.png';
import instIMG from '../../images/inst.png';
import logoIMG from '../../images/white-logo.png';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <img className="footer__logo" src={logoIMG} alt="logo" />

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
