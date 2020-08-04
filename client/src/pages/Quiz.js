import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import QuizQuestions from '../components/QuizQuestions';
import Questions from '../assets/questions/english'
import '../index.css';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            timer: 120,
            level: "one",
            subject: "english",
            questions: Questions.levelOne
        }
    }

    componentDidMount() {
        this.startTimer();
    }

    startTimer = () => {
        this.timerInterval = setInterval(() => {
            if (this.state.timer > 0) this.setState({ timer: this.state.timer - 1 });
            else this.finishQuiz();
        }, 1000);
    }

    finishQuiz = () => {
        this.stopTimer();
    }

    stopTimer = () => {
        clearInterval(this.timerInterval);
    }

    updateScore = () => {
        this.setState({ score: this.state.score + 10 });
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

    render() {
        return (
            <Container className="my-auto">
                <Jumbotron className="px-5 py-4 m-0 text-center jumbo">
                    <div className="py-2 d-flex justify-content-between" style={{ fontSize: "20px" }}>
                        {this.renderScore()}
                        {this.renderTimer()}
                    </div>
                    <hr />
                    <QuizQuestions questions={this.state.questions} updateScore={this.updateScore} finishQuiz={this.finishQuiz} />
                </Jumbotron>
            </Container>
        );
    }
}

export default Quiz;
