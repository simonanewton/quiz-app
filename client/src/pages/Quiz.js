import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { } from '@fortawesome/free-solid-svg-icons';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 0,
            score: 0
        }
    }

    render() {
        return (
            <Container className="p-4">
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </Container>
        );
    }
}

export default Quiz;
