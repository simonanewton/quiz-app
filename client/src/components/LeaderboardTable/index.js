import React from "react";
import { TableHeaderColumn, BootstrapTable } from 'react-bootstrap-table';
import './index.css';

class LeaderboardTable extends React.Component {
    render() {
        return (
            <BootstrapTable className="table">
                <TableHeaderColumn>Username</TableHeaderColumn>
                <TableHeaderColumn isKey dataField="id">Score</TableHeaderColumn>
            </BootstrapTable>
    )};
}

export default LeaderboardTable;