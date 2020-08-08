import React, { Component } from 'react';
import { ToggleButtonGroup, ToggleButton, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import '../../index.css';

class QuizQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            shuffledQuestions: null,
            chosen: null,
            isChosen: false,
            isLast: false
        }
    }

    static getDerivedStateFromProps = (props, state) => {
        const shuffleArray = (array) => {
            let shuffled = [].concat(array);
            let current = shuffled.length, temp, random;

            while (current) {
                random = Math.floor(Math.random() * current--);

                temp = shuffled[current];
                shuffled[current] = shuffled[random];
                shuffled[random] = temp;
            }

            return shuffled;
        }

        return !state.shuffledQuestions ? { shuffledQuestions: shuffleArray(props.questions) } : null;
    }

    renderChoices = () => {
        return this.props.questions[this.state.index].choices.map((choice) => (
            <ToggleButton type="radio" value={choice} key={choice} size="lg" block className="my-3 rounded">
                {choice}
            </ToggleButton>
        ));
    }

    renderNextButton = () => {
        const nextQuestion = (
            <Button size="lg" className="my-3" disabled={!this.state.isChosen} onClick={this.nextQuestion}>
                <span className="pr-2 quizBtn">Next Question</span>
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </Button>
        );

        const lastQuestion = (
            <Button size="lg" className="my-3" disabled={!this.state.isChosen} onClick={this.nextQuestion}>
                <span className="pr-2 quizBtn">Finish Quiz</span>
                <FontAwesomeIcon icon={faFlagCheckered} />
            </Button>
        );

        return this.state.isLast ? lastQuestion : nextQuestion;
    }

    selectChoice = (value) => {
        this.setState({
            chosen: value,
            isChosen: true
        });
    }

    nextQuestion = () => {
        const currentQuestion = this.props.questions[this.state.index];
        if (this.state.chosen === currentQuestion.choices[currentQuestion.correct_choice]) this.props.updateScore();
        if (!this.state.isLast) this.setState({
            index: this.state.index + 1,
            chosen: null,
            isChosen: false,
            isLast: this.state.index === this.props.questions.length - 2
        });
        else this.props.finishQuiz();
    }

    render() {
        return (
            <div>
                <h1 className="py-2">Question {this.state.index + 1}</h1>
                <h3 className="py-3">{this.state.shuffledQuestions[this.state.index].question}</h3>
                <ToggleButtonGroup vertical name="choices" type="radio" className="w-50" onChange={(event) => this.selectChoice(event)}>
                    {this.renderChoices()}
                </ToggleButtonGroup>
                <br />
                <hr />
                {this.renderNextButton()}
            </div>
        );
    }
}

export default QuizQuestions;
