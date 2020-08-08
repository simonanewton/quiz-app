import React from "react";
import { Jumbotron, TabContainer, TabContent, TabPane, Row, NavItem, NavLink, Nav, Col, ToggleButtonGroup } from 'react-bootstrap';
import '../index.css';
// import LeaderboardDifficulty from "../components/LeaderboardDifficulty";
// import { useBootstrapPrefix } from "react-bootstrap/esm/ThemeProvider";
import { List, ListItem } from '../components/LeaderboardTable';

class LeaderboardMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    firstname: "Nicole",
                    lastname: "Obomsawin",
                    username: "nicoleobom",
                    emailAddress: "nicoleobom@yahoo.com",
                    password: "dfjs8jc83jf",
                    scores: [
                        {
                            score: 432,
                            difficulty: 4,
                            subject: "Math"
                        }]
                  },
                  {
                    firstname: "Simon",
                    lastname: "Newton",
                    username: "simonsays",
                    emailAddress: "bleepblorp@gmail.com",
                    password: "simonisknowledgable",
                    scores: [{
                      score: 432,
                      difficulty: 5,
                      subject: "Science"
                    },
                    {
                      score: 543,
                      difficulty: 5,
                      subject: "Math"
                    }]
                  },
                  {
                    firstname: "Logan",
                    lastname: "Hemphill",
                    username: "loganhemphill",
                    emailAddress: "lhemphill@yahoo.com",
                    password: "fdsafads",
                    scores: [{
                      score: 542,
                      difficulty: 5,
                      subject: "History"
                    }]
                },
                {
                    firstname: "Toni",
                    lastname: "Davis",
                    username: "tdj",
                    emailAddress: "tdj@gmail.com",
                    password: "coolchick92",
                    scores: [{
                      score: 654,
                      difficulty: 5,
                      subject: "English"
                    }]
                  },
            ]
        };
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