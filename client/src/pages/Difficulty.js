import React from "react";
import { Container, Row } from "react-bootstrap";
// import Block from "../components/Block";
import DiffBlock from "../components/DiffBlock";


function Difficulty(props) {
    const { subject } = props.match.params
    return (
        <Container className="my-auto">
            <h2 className="d-flex justify-content-center">Choose your grade or difficulty level below</h2>
            <Row className="d-flex justify-content-center">
                <DiffBlock link={`/quizzes/${subject}/1`} name="1"  />
            </Row>
            <Row className="d-flex justify-content-center">
                <DiffBlock link={`/quizzes/${subject}/2`} name="2"  />
            </Row>
            <Row className="d-flex justify-content-center">
                <DiffBlock link={`/quizzes/${subject}/3`} name="3"  />
            </Row>
            <Row className="d-flex justify-content-center">
                <DiffBlock link={`/quizzes/${subject}/4`} name="4"  />
            </Row>
            <Row className="d-flex justify-content-center">
                <DiffBlock link={`/quizzes/${subject}/5`} name="5"  />
            </Row>
        </Container>
    );
}

export default Difficulty;
