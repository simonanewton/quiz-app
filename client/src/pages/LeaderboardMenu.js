import React from "react";
import { TabContainer, TabContent, TabPane, Row, NavItem, NavLink, Nav, Col, ToggleButtonGroup } from 'react-bootstrap';
import '../index.css';

class LeaderboardMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choices: ['Overall', 'Math', 'Science', 'English', 'History']
        }
    }
    
    // this.state.choices.map((choice) =>

    renderChoices = () => {
        return (
            <TabContainer id="left-tabs" defaultActiveKey="first">
                  <Row className="col-sm-12">
                    <Col sm="3">
                        <Nav variant="pills" className="flex-column">
                            <NavItem>
                                <NavLink eventKey="first">Overall</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink eventKey="second">Math</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink eventKey="third">Science</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink eventKey="fourth">English</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink eventKey="fifth">History</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col sm="9">
                        <TabContent>
                            <TabPane eventKey="first">
                                fjdsklfjdsklfjdskl
                            </TabPane>
                            <TabPane eventKey="second">
                                blah blah
                            </TabPane>
                            <TabPane eventKey="third">
                                cool
                            </TabPane>
                            <TabPane eventKey="fourth">
                                test
                            </TabPane>
                            <TabPane eventKey="fifth">
                                testing
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