import React from "react";
import { Jumbotron } from 'react-bootstrap';
import '../index.css';
import { List, ListItem } from '../components/LeaderboardTable';
import API from '../utils/API';


class LeaderboardMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        console.log("yay!");

        API.getUsers(this.state.users)
            .then(res => {
                console.log(res.data);

                if (res.data.length === 0) {
                    throw new Error("No data found");
                }
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                
                let scoreArray = [];

                // Start new array excluding users with no score data
                for (var i=0; i < res.data.length; i++) {
                    if (res.data[i].scores.length !== 0) {
                        scoreArray.push(res.data[i])
                    }
                }

                console.log(scoreArray);

                this.setState({
                    users: scoreArray
                })
            })
    }

    // Render user list
    renderUsers() {
        return this.state.users.map(user => (
            <ListItem key={user._id}>{user.username}</ListItem>
        ))
    }

    // need to fix to make sure it doesn't include anyone who doesn't have scores yet
    renderScores() {
        return this.state.users.map(user => (
            <ListItem key={user._id}>{user.scores[0].score}</ListItem>
        ))
    }


    // Render DOM
    render() {
        return (
            <div className="float-md-center bg">
                <div className="row justify-content-center title">
                    <h3 id="leaderboard-title"><i className="fas fa-crown"></i>Leaderboard<i className="fas fa-crown"></i></h3>
                </div>
                <Jumbotron className="background">
                    <div className="row justify-content-center align-self-center">
                        <div className="col-sm-6 col-xs-6 list">
                            <List>{this.renderScores()}</List>
                        </div>
                        <div className="col-sm-6 col-xs-6 list">
                            <List>{this.renderUsers()}</List>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}


export default LeaderboardMenu;