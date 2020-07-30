import React from "react";
import { Container } from "react-bootstrap";
import Block from "../components/Block";
import { faBookOpen, faMedal } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (
        <Container className="d-flex justify-content-center">
            <Block name="Quizzes" icon={faBookOpen} />
            <Block name="Leaderboard" icon={faMedal} />
        </Container>
    );
}

export default Home;
