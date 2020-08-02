import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Leaderboard from './pages/Leaderboard';
import LeaderboardMenu from './pages/LeaderboardMenu';
import QuizMenu from './pages/QuizMenu';
import Quiz from './pages/Quiz';
import Loading from './components/Loading/index'
import './App.css';

function App() {
	return (
		<Router>
			<div className="vh-100 d-flex flex-column">
				<Header />
				{/* <Loading /> */}
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/signin">
						<SignIn />
					</Route>
					<Route exact path="/quizzes">
						<QuizMenu />
					</Route>
					<Route exact path="/quizzes/:subject">
						<Quiz />
					</Route>
					<Route exact path="/leaderboard">
						<LeaderboardMenu />
					</Route>
					<Route exact path="/leaderboard/:type">
						<Leaderboard />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
