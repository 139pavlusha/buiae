import React, { Component } from 'react';
import './QuestionsList.scss';

import Question from './Question/Question';


// --------------------LANG--------------------------
import ENG from '../../../lang/eng/Home';
import FRA from '../../../lang/fra/Home';
import ARB from '../../../lang/arb/Home';

const LANG = localStorage.getItem('LANG');

let questions;
if (LANG === 'France') {
    questions = FRA.questions;
}
else if (LANG === 'Arabian') {
    questions = ARB.questions;
}
else {
    questions = ENG.questions;
}
// --------------------LANG--------------------------


export default class QuestionsList extends Component {

    render() {
        return (
            <div className="questions">
                <h2 className="questions__title">{questions.title}</h2>
                <p className="questions__desc">{questions.desc.part1}<span className="questions__link">{questions.desc.contact}</span> {questions.desc.part2}</p>

                <ul className="questions__list">
                    <Question caption={questions.question1.caption} answer={questions.question1.answer} />
                    <Question caption={questions.question2.caption} answer={questions.question2.answer} />
                    <Question caption={questions.question3.caption} answer={questions.question3.answer} />
                    <Question caption={questions.question4.caption} answer={questions.question4.answer} />
                    <Question caption={questions.question5.caption} answer={questions.question5.answer} />
                    <Question caption={questions.question6.caption} answer={questions.question6.answer} />
                </ul>
            </div>
        );
    }
}