import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import allQuestions from '../assets/questions'
import QuizQuestions from '../components/QuizQuestions';
import '../index.css';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            timer: 120,
            level: "",
            subject: "",
            questions: []
        }
    }

    componentDidMount() {
        // const { subject } = this.props.match.params;
        // const { level } = this.props.match.params;
        // import (`../assets/questions/${subject}`).then(data => {
        //     // this.setState({ questions: data.default.levelOne })
        //     this.setState({ questions: data.default[1] })
        // });
        // console.log(subject);
        this.setQuestions();
        this.startTimer();
    }

    // componentDidUpdate = (prevProps) => {
    //     const { match: prevMatch } = prevProps;
    //     const { match: currentMatch } = this.props;
      
    //     // any time the params change, update the questions
    //     if (prevMatch.params !== currentMatch.params) this.setQuestions();
    //   };

    setQuestions = () => {
        const { subject, level } = this.props.match.params;
        const subjectQuestions = allQuestions[subject];
        const questions = !!subjectQuestions ? subjectQuestions[level] : [];
        this.setState({ questions });
      };

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
