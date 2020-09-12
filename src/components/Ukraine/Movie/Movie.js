import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import './Movie.scss';

export default class Movie extends Component {
    render() {
        return (
            <div className="ukraine-movie">
                <div className="ukraine-movie__post">
                    <h2 className="ukraine-movie__title">Ukraine</h2>
                    <h3 className="ukraine-movie__subtitle">Here is a brief general information of our state. Hope these facts will be useful for you to discover more about Ukraine and its life.</h3>
                    <p className="ukraine-movie__info">Ukraine is definitely a destination to be discovered. It is the largest country in Europe with 0.41% of the world’s territory and 0.85% of the world’s population. It borders the Russian Federation, Belarus, Poland, Slovakia, Hungary, Romania and Moldova, with the Black Sea and Sea of Azov to the south. </p>
                    <p className="ukraine-movie__info">Ukraine is a place with fabulous nature, architectural landmarks and golden-domed churches. Carpathian mountains are good for skiing, hiking, fishing and hunting. The coastline on the Black Sea is a popular summer destination for vacationers.</p>
                </div>

                <div class="ukraine-movie__video">
                    <ReactPlayer url="https://youtu.be/9AD4b4cVqXg" controls={true} width="100%" height="100%" />
                </div>
            </div>
        );
    }
}
