import React from "react";
import { TabContainer, TabContent, TabPane } from 'react-bootstrap';

class LeaderboardMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choices: ['Overall', 'Math', 'Science', 'English', 'History']
        }
    }
    
    renderChoices = () => {
        return this.state.choices.map((choice) => (
            
            
            
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