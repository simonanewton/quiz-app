import React, { Component } from 'react';
import '../index.css';
import Quiz from '.../pages/quiz';

class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score = Quiz.score

        }
    }
}

export default Leaderboard;