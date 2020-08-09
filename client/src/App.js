import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from './pages/SignUp';
import QuizMenu from './pages/QuizMenu';
import Difficulty from './pages/Difficulty';
import Quiz from './pages/Quiz';
import LeaderboardMenu from './pages/LeaderboardMenu';
// import Loading from './components/Loading/index'

class App extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = { isLoading: true }
	// }	

	// performLoadingTime = async() => {
	// 	return new Promise((resolve) =>
	// 		setTimeout(
	// 			() => { resolve('result') },
	// 			2000
	// 		)
	// 	);
	// }

	// async componentDidMount() {
	// 	const data = await this.performLoadingTime();

	// 	if (data !== null) {
	// 		this.setState({ isLoading: false })
	// 	}
	// }

	render() {
		// if (this.state.isLoading) return <Loading />;

		return (
			<Router>
				<div className="vh-100 d-flex flex-column">
					<Header />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/signin" component={SignIn} />
						<Route exact path="/signup" component={SignUp} />
						<Route exact path="/quizzes" component={QuizMenu} />
						<Route exact path="/quizzes/:subject" component={Difficulty} />
						<Route exact path="/quizzes/:subject/:level" component={Quiz} />
						<Route exact path="/leaderboard" component={LeaderboardMenu} />
					</Switch>
				</div>
			</Router>
		)
	};
}

export default App;
