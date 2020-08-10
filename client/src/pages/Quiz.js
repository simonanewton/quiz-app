import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Jumbotron, Button } from 'react-bootstrap';
import allQuestions from '../assets/questions';
import QuizQuestions from '../components/QuizQuestions';
import API from '../utils/API';
import '../index.css';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            timer: 300,
            questions: [],
            isOver: false
        }
    }

    static getDerivedStateFromProps = (props, state) => {
        const setQuestions = () => {
            const { subject, level } = props.match.params;
            return (allQuestions[subject])[level];
        };

        return !state.questions.length ? { questions: setQuestions() } : null;
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

    stopTimer = () => {
        clearInterval(this.timerInterval);
    }

    updateScore = () => {
        this.setState({ score: this.state.score + 10 });
    }

    finishQuiz = () => {
        this.stopTimer();
        this.setState({
            score: this.state.score + this.state.timer,
            isOver: true
        });
        // this.updateUserScore();
    }

    updateUserScore = async () => {
        const { subject, level } = this.props.match.params;

        const userId = null;
        const currentUser = await API.getById(userId);

        console.log(currentUser);

        const currentHighscore = null;
        if (this.state.score > currentHighscore) API.updateUserScore(userId, this.state.score, level, subject);
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

    renderQuiz = () => {
        return (
            <div>
                <div className="py-2 d-flex justify-content-between" style={{ fontSize: "20px" }}>
                    {this.renderScore()}
                    {this.renderTimer()}
                </div>
                <hr />
                <QuizQuestions questions={this.state.questions} updateScore={this.updateScore} finishQuiz={this.finishQuiz} />
            </div>
        );
    }

    renderEndScreen = () => {
        return (
            <div>
                <h1 className="my-3">Your Score: {this.state.score}</h1>
                <div className="d-flex justify-content-center">
                    <Button as={Link} to="/quizzes" className="p-3 m-3 w-25" style={{ fontSize: "20px" }}>Quizzes</Button>
                    <Button as={Link} to="/leaderboard" className="p-3 m-3 w-25" style={{ fontSize: "20px" }}>Leaderboard</Button>
                </div>
            </div>
        );
    }

    render() {
        return (
            <Container className="my-auto">
                <Jumbotron className="px-5 py-4 m-0 text-center jumbo">
                    {!this.state.isOver ? this.renderQuiz() : this.renderEndScreen()}
                </Jumbotron>
            </Container>
        );
    }
}

export default Quiz;
