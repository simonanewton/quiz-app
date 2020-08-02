import React, { Component } from 'react';
import { Container, Jumbotron, ToggleButtonGroup, ToggleButton, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            timer: 120,
            questionNum: 1,
            question: "The ______ is the star closest to Earth.",
            choices: ["Space Station", "Cloud", "Sun", "Telescope"],
            chosen: null,
            isChosen: false,
            isLast: false
        }
    }

    startTimer = () => {
        this.timerInterval = setInterval(() => {
            if (this.state.timer > 0) this.setState({ timer: this.state.timer - 1 });
            else this.finishQuiz();
        }, 1000);
    }

    stopTimer = () => {
        clearInterval(this.timerInterval);
    }

    renderScore = () => {
        return <div><b>Score: {this.state.score}</b></div>;
    }

    renderTimer = () => {
        const minutes = Math.floor(this.state.timer / 60);
        const seconds = Math.floor(this.state.timer % 60);
        const color = this.state.timer <= 10 ? "red" : "black";
        return <div><b style={{ color: color }}>Timer: {minutes}m {seconds}s</b></div>;
    }

    renderChoices = () => {
        return this.state.choices.map((choice) => (
            <ToggleButton type="radio" value={choice} key={choice} variant="primary" size="lg" block className="my-3 rounded">
                {choice}
            </ToggleButton>
        ));
    }

    renderNextButton = () => {
        const nextQuestion = (
            <Button variant="primary" size="lg" className="my-3" disabled={!this.state.isChosen} onClick={this.nextQuestion}>
                <span className="pr-2">Next Question</span>
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </Button>
        );

        const lastQuestion = (
            <Button variant="primary" size="lg" className="my-3" disabled={!this.state.isChosen} onClick={this.finishQuiz}>
                <span className="pr-2">Finish Quiz</span>
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
        return;
    }

    finishQuiz = () => {
        this.stopTimer();
        return;
    }

    componentDidMount() {
        this.startTimer();
    }

    render() {
        return (
            <Container>
                <Jumbotron className="px-5 py-4 m-0 text-center jumbo">
                    <div className="py-2 d-flex justify-content-between" style={{ fontSize: "20px" }}>
                        {this.renderScore()}
                        {this.renderTimer()}
                    </div>
                    <hr />
                    <h1 className="py-2">Question {this.state.questionNum}</h1>
                    <h3 className="py-3">{this.state.question}</h3>
                    <ToggleButtonGroup vertical className="btn" name="choices" type="radio" className="w-50" onChange={(event) => this.selectChoice(event)}>
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
