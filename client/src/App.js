import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header"
import StartGame from "./components/StartGame"
import './App.css';

function App() {
  return (
	  <Router>
		  <Header />
	  </Router>
  );
}

export default App;
