import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import './App.css';

function App() {
	return (
		<Router>
			<div>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/signin">
						<SignIn />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
