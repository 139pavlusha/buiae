import React, { Component } from 'react';
import './QuestionsList.scss';

import Question from './Question/Question';

export default class QuestionsList extends Component {

    render() {
        return (
            <div className="questions">
                <h2 className="questions__title">Frequently Asked Questions</h2>
                <p className="questions__desc">If you didn’t find what you were after, <span className="questions__link">contact</span> us directly and we’ll  help.</p>

                <ul className="questions__list">
                    <Question caption="What documents should I have for applying? What documents should I have for applying? v" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aperiam a? Veniam dolorum, ut dignissimos ipsam explicabo quis enim veritatis dolor ex. Quasi commodi asperiores tenetur modi quisquam sequi ab amet consectetur adipisicing elit. Laboriosam, aperiam a? Veniam dolorum, ut dignissimos ipsam explicabo quis enim veritatis dolor ex. Quasi commodi asperiores tenetur modi quisquam sequi ab!" />
                    <Question caption="Question 2" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aperiam a? Veniam dolorum, ut dignissimos ipsam explicabo quis enim veritatis dolor ex. Quasi commodi asperiores tenetur modi quisquam sequi ab amet consectetur adipisicing elit. Laboriosam, aperiam a? Veniam dolorum, ut dignissimos ipsam explicabo quis enim veritatis dolor ex. Quasi commodi asperiores tenetur modi quisquam sequi ab!" />
                    <Question caption="Question 3" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aperiam a? Veniam dolorum, ut dignissimos ipsam explicabo quis enim veritatis dolor ex. Quasi commodi asperiores tenetur modi quisquam sequi ab amet consectetur adipisicing elit. Laboriosam, aperiam a? Veniam dolorum, ut dignissimos ipsam explicabo quis enim veritatis dolor ex. Quasi commodi asperiores tenetur modi quisquam sequi ab!" />
                    <Question caption="Question 4" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aperiam a? Veniam dolorum, ut dignissimos ipsam explicabo quis enim veritatis dolor ex. Quasi commodi asperiores tenetur modi quisquam sequi ab amet consectetur adipisicing elit. Laboriosam, aperiam a? Veniam dolorum, ut dignissimos ipsam explicabo quis enim veritatis dolor ex. Quasi commodi asperiores tenetur modi quisquam sequi ab!" />
                    <Question caption="Question 5" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aperiam a? Veniam dolorum, ut dignissimos ipsam explicabo quis enim veritatis dolor ex. Quasi commodi asperiores tenetur modi quisquam sequi ab amet consectetur adipisicing elit. Laboriosam, aperiam a? Veniam dolorum, ut dignissimos ipsam explicabo quis enim veritatis dolor ex. Quasi commodi asperiores tenetur modi quisquam sequi ab!" />
                    <Question caption="Question 6" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aperiam a? Veniam dolorum, ut dignissimos ipsam explicabo quis enim veritatis dolor ex. Quasi commodi asperiores tenetur modi quisquam sequi ab amet consectetur adipisicing elit. Laboriosam, aperiam a? Veniam dolorum, ut dignissimos ipsam explicabo quis enim veritatis dolor ex. Quasi commodi asperiores tenetur modi quisquam sequi ab!" />
                </ul>
            </div>
        );
    }
}