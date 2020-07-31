import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import QuizMenu from './pages/QuizMenu';
import './App.css';

function App() {
	return (
		<Router>
			<div className="vh-100 d-flex flex-column">
				<Header />
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
				</Switch>
			</div>
		</Router>
	);
}

export default App;
