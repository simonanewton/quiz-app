import React from "react";
import { ToggleButtonGroup, ToggleButton, Button } from 'react-bootstrap';
// import './index.css';

class LeaderboardDifficulty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: ["Overall", "1", "2", "3", "4", "5"]
        }
    }

    renderChoices = () => {
        return this.state.choice.map((choice) => (
            <ToggleButton type="radio" value={choice} key={choice} size="lg" block className="my-3 rounded">
                {choice}
            </ToggleButton>
        ));
    }


    render() {
        return (
            <ToggleButtonGroup name="choices" type="radio" className="w-50" onChange={(event) => this.selectChoice(event)}>
                    {this.renderChoices()}
                </ToggleButtonGroup>

    )};
}

export default LeaderboardDifficulty;