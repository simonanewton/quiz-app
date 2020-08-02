import React, { Component } from 'react';
import { Container, Jumbotron, ToggleButtonGroup, ToggleButton, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { faArrowAltCircleRight, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

class Leaderboard extends React.Component {
    render() {
        return (
            <div>
                <BootstrapTable>
                    <TableHeaderColumn isKey dataField="#">Overall Score</TableHeaderColumn>
                    <TableHeaderColumn>Username</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

export default Leaderboard;