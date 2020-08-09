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
                
                if(res.data.length === 0){
                    throw new Error ("No data found");
                }
                if(res.data.status === "error") {
                    throw new Error (res.data.message);
                }

                this.setState({
                    users: res.data
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
            <Jumbotron className="background float-md-center">
                    <div className="row justify-content-center align-self-center">
                        <h3>Leaderboard</h3>
                    </div>
                    <div className="row justify-content-center align-self-center">
                        <div className="col-sm-6 col-xs-6 list">
                            <List>{this.renderScores()}</List>
                        </div>
                        <div className="col-sm-6 col-xs-6 list">
                            <List>{this.renderUsers()}</List>
                        </div>
                    </div>
            </Jumbotron>
        );
    }

                

      
}


//////////////// reference for later

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