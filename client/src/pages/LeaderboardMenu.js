import React from "react";
import { TabContainer, TabContent, TabPane, Row, Nav, Col, Tab, ToggleButtonGroup } from 'react-bootstrap';

class LeaderboardMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choices: ['Overall', 'Math', 'Science', 'English', 'History']
        }
    }
    
    renderChoices = () => {
        return this.state.choices.map((choice) => (
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">{choice}</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    {/* <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        
                        </Tab.Pane>
                    </Tab.Content>
                    </Col> */}
                </Row>
            </Tab.Container>
            
            
            // <ToggleButton type="radio" value={choice} key={choice} variant="primary" size="lg" block className="my-3 rounded btn">
            //     {choice}
            // </ToggleButton>
        ));
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
                <ToggleButtonGroup vertical name="choices" type="radio" className="w-25" onChange={(event) => this.selectChoice(event)}>
                        {this.renderChoices()}
                </ToggleButtonGroup>
            </div>
        )
    }
}

export default LeaderboardMenu;