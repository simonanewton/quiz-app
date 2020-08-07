import React from "react";
import { Jumbotron, TabContainer, TabContent, TabPane, Row, NavItem, NavLink, Nav, Col, ToggleButtonGroup } from 'react-bootstrap';
import '../index.css';
import LeaderboardTable from '../components/LeaderboardTable/index';
import LeaderboardDifficulty from "../components/LeaderboardDifficulty";

class LeaderboardMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choices: ['Overall', 'Math', 'Science', 'English', 'History']
        }
    }

    renderChoices = () => {
        return (
                <TabContainer id="left-tabs" defaultActiveKey="first">
                    <Row className="col-sm-12 center">
                        <Col sm="3">
                            <Nav variant="pills" className="flex-column">
                                <NavItem>
                                    <NavLink className="leaderboard-btn" eventKey="first">Overall</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="leaderboard-btn" eventKey="second">Math</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="leaderboard-btn" eventKey="third">Science</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="leaderboard-btn" eventKey="fourth">English</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="leaderboard-btn" eventKey="fifth">History</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col sm="9">
                            <TabContent>
                                <TabPane eventKey="first">
                                    <LeaderboardTable/>
                                </TabPane>
                                <TabPane eventKey="second">
                                    <LeaderboardDifficulty />
                                    <LeaderboardTable/>
                                </TabPane>
                                <TabPane eventKey="third">
                                    <LeaderboardTable/>
                                </TabPane>
                                <TabPane eventKey="fourth">
                                    <LeaderboardTable/>
                                </TabPane>
                                <TabPane eventKey="fifth">
                                    <LeaderboardTable/>
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </TabContainer>
        );
    }

    selectChoice = (value) => {
        this.setState({
            chosen: value,
            isChosen: true
        });
    }

    render() {
        return (
            <div>
                <ToggleButtonGroup vertical name="choices" type="radio" className="w-100" onChange={(event) => this.selectChoice(event)}>
                        {this.renderChoices()}
                </ToggleButtonGroup>
            </div>
        )
    }
}

export default LeaderboardMenu;