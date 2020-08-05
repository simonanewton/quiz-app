import React from "react";
import { TableHeaderColumn, BootstrapTable } from 'react-bootstrap-table';

class LeaderboardTable extends React.Component {
    render() {
        return (
            <BootstrapTable>
                <TableHeaderColumn>Username</TableHeaderColumn>
                <TableHeaderColumn isKey dataField="id">Score</TableHeaderColumn>
            </BootstrapTable>
    )};
}

export default LeaderboardTable;