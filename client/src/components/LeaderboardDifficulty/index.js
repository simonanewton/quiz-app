import React from "react";
import { ToggleButtonGroup, ToggleButton, Button } from 'react-bootstrap';
import './index.css';

class LeaderboardDifficulty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: ["Overall", "1", "2", "3", "4", "5"]
        }
    }

    renderChoices = () => {
        return this.state.choice.map((choice) => (
            <ToggleButton type="radio" value={choice} key={choice} size="lg" block className="my-3 rounded difficultyBtn">
                {choice}
            </ToggleButton>
        ));
    }


    render() {
        return (
            <div>
                <h3>Please choose the level of difficulty:</h3>
                <ToggleButtonGroup name="choices" type="radio" className="w-100">
                        {this.renderChoices()}
                </ToggleButtonGroup>
            </div>
    )};
}

export default LeaderboardDifficulty;