import React, { Component } from 'react';
import { Container, Jumbotron, ToggleButtonGroup, ToggleButton, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            timer: 60,
            questionNum: 1,
            question: "The ______ is the star closest to Earth.",
            choices: ["Space Station", "Cloud", "Sun", "Telescope"],
            isLast: false
        }
    }

    renderScore() {
        return <div><b>Score: {this.state.score}</b></div>;
    }

    renderTimer() {
        return <div><b>Timer: {this.state.timer}s</b></div>;
    }

    renderChoices() {
        return this.state.choices.map((choice) => (
            <ToggleButton type="radio" value={choice} key={choice} variant="primary" size="lg" block className="my-3 rounded">
                {choice}
            </ToggleButton>
        ));
    }

    renderNextButton() {
        const nextQuestion = (
            <Button variant="primary" size="lg" className="my-3" onClick={this.nextQuestion()}>
                <span className="pr-2">Next Question</span>
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </Button>
        );

        const lastQuestion = (
            <Button variant="primary" size="lg" className="my-3" onClick={this.finishQuiz()}>
                <span className="pr-2">Finish Quiz</span>
                <FontAwesomeIcon icon={faFlagCheckered} />
            </Button>
        );

        return this.state.isLast ? lastQuestion : nextQuestion;
    }

    selectChoice() {
        return;
    }

    nextQuestion() {
        return;
    }

    finishQuiz() {
        return;
    }

    render() {
        return (
            <Container>
                <Jumbotron className="px-5 py-4 m-0 text-center">
                    <div className="py-2 d-flex justify-content-between" style={{ fontSize: "20px" }}>
                        {this.renderScore()}
                        {this.renderTimer()}
                    </div>
                    <hr />
                    <h1 className="py-2">Question {this.state.questionNum}</h1>
                    <h3 className="py-3">{this.state.question}</h3>
                    <ToggleButtonGroup vertical name="choices" type="radio" className="w-50" onChange={this.selectChoice()}>
                        {this.renderChoices()}
                    </ToggleButtonGroup>
                    <br />
                    <hr />
                    {this.renderNextButton()}
                </Jumbotron>
            </Container>
        );
    }
}

export default Quiz;
