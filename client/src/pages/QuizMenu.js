import React from "react";
import { Container, Row } from "react-bootstrap";
import Block from "../components/Block";
import { faCalculator, faFlask, faPencilAlt, faBook } from '@fortawesome/free-solid-svg-icons';

function QuizMenu() {
    return (
        <Container className="my-auto">
            <Row className="d-flex justify-content-center">
                <Block link="/quizzes/math" name="Math" icon={faCalculator} />
                <Block link="/quizzes/science" name="Science" icon={faFlask} />
            </Row>
            <Row className="d-flex justify-content-center">
                <Block link="/quizzes/english" name="English" icon={faPencilAlt} />
                <Block link="/quizzes/history" name="History" icon={faBook} />
            </Row>
        </Container>
    );
}

export default QuizMenu;
