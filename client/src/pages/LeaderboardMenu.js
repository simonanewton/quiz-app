import React from "react";
import { Jumbotron, TabContainer, TabContent, TabPane, Row, NavItem, NavLink, Nav, Col, ToggleButtonGroup } from 'react-bootstrap';
import '../index.css';
// import LeaderboardDifficulty from "../components/LeaderboardDifficulty";
// import { useBootstrapPrefix } from "react-bootstrap/esm/ThemeProvider";
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
          console.log(this.state.users);
            .then(res => {
                // if(res.data.length === 0){
                //     throw new Error ("No data found");
                // }
                // if(res.data.status === "error") {
                //     throw new Error (res.data.message);
                // }

                // console.log('test')

                this.setState({
                    username: res.data[0],
                    score: res.data.scores[0].score,
                }, console.log('test'))

                console.log("Test");
            })
            .catch(err => this.setState({ error: err.message }));
      }
      
    // Render user list
    renderUsers() {
        return this.state.users.map(user => (
            <ListItem>{user.username}</ListItem>
        ))
    }

    // Render score list
    renderScores() {
        return this.state.users.map(user => (
            <ListItem>{user.scores[0].score}</ListItem>
        ))
    }

    // Render DOM
    render() {
        return (
            <Jumbotron className="background">
                    <div className="row">
                        <div className="col-sm-6 list">
                            <List>{this.renderUsers()}</List>
                        </div>
                        <div className="col-sm-6 list">
                            <List>{this.renderScores()}</List>
                        </div>
                    </div>
            </Jumbotron>
        );
    }

                

      
}



// function LeaderboardMenu () {

//     const [users, setUsers] = useState()
//     const [formObject, setFormObject] = useState([])

//     useEffect(() => {
//         loadLeaderboard()
//     }, []);

//     function loadLeaderboard() {
//         API.getUsers()
//             .then(res =>
//                 setUsers(res.data)
//             )
//             .catch(err => console.log(err))
            
//     }
    
//         return (


//             <List>
//                 {users.map(user => (
//                     <ListItem key={user._id}>
//                             <strong>
//                                 {this.state.username}
//                             </strong>
//                     </ListItem>
//                 ))}
//             </List>

                // <List>
                //     {users.map(user => (
                //         <ListItem key={user._id}>
                //             <Link to={"/api" + user._id}>
                //                 <strong>
                //                     {user.username} by {user.score}
                //                 </strong>
                //             </Link>
                //         </ListItem>
                //     ))}
                // </List>



                // <TabContainer id="left-tabs" defaultActiveKey="first">
                //     <Row className="col-sm-12 center">
                //         <Col sm="3">
                //             <Nav variant="pills" className="flex-column">
                //                 <NavItem>
                //                     <NavLink className="leaderboard-btn" eventKey="first">Overall</NavLink>
                //                 </NavItem>
                //                 <NavItem>
                //                     <NavLink className="leaderboard-btn" eventKey="second">Math</NavLink>
                //                 </NavItem>
                //                 <NavItem>
                //                     <NavLink className="leaderboard-btn" eventKey="third">Science</NavLink>
                //                 </NavItem>
                //                 <NavItem>
                //                     <NavLink className="leaderboard-btn" eventKey="fourth">English</NavLink>
                //                 </NavItem>
                //                 <NavItem>
                //                     <NavLink className="leaderboard-btn" eventKey="fifth">History</NavLink>
                //                 </NavItem>
                //             </Nav>
                //         </Col>
                //         <Col sm="9">
                //             <TabContent>
                //                 <TabPane eventKey="first">
                //                     {/* <LeaderboardTable/> */}
                //                     <List>
                //                         {users.map(user => (
                //                             <ListItem key={user._id}>
                //                                 <Link to={"/user/" + user._id}>
                //                                 <strong>
                //                                     {user.username} by {user.score}
                //                                 </strong>
                //                                 </Link>
                //                             </ListItem>
                //                         ))}
                //                     </List>
                //                 </TabPane>
                //                 <TabPane eventKey="second">
                //                     <LeaderboardDifficulty />
                //                         {/* <LeaderboardTable /> */}
                //                 </TabPane>
                //                 <TabPane eventKey="third">
                //                     <LeaderboardDifficulty />
                //                     {/* <LeaderboardTable/> */}
                //                 </TabPane>
                //                 <TabPane eventKey="fourth">
                //                     <LeaderboardDifficulty />
                //                     {/* <LeaderboardTable/> */}
                //                 </TabPane>
                //                 <TabPane eventKey="fifth">
                //                     <LeaderboardDifficulty />
                //                     {/* <LeaderboardTable/> */}
                //                 </TabPane>
                //             </TabContent>
                //         </Col>
                //     </Row>
                // </TabContainer>
//         );
// }

export default LeaderboardMenu;