import React from "react";
import { Container, Row } from "react-bootstrap";
import Block from "../components/Block";
import { faCalculator, faFlask, faPencilAlt, faBook, faMedal } from '@fortawesome/free-solid-svg-icons';

function LeaderboardMenu() {
    return (
        <Container>
            <Row className="d-flex justify-content-center">
                <Block link="/leaderboard/alltime" name="Overall" icon={faMedal} />
                <Block link="/leaderboard/science" name="Science" icon={faFlask} />
            </Row>
            <Row className="d-flex justify-content-center">
                <Block link="/leaderboard/english" name="English" icon={faPencilAlt} />
                <Block link="/leaderboard/history" name="History" icon={faBook} />
            </Row>
            <Row className="d-flex justify-content-center">
                <Block link="/leaderboard/math" name="Math" icon={faCalculator} />
            </Row>
        </Container>
    );
}

export default LeaderboardMenu;