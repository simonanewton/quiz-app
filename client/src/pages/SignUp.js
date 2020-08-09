import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Jumbotron, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
// import Register from '../components/Register';
import API from '../utils/API';
// import store from "store";

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userData: {
				firstname: null,
				lastname: null,
				emailaddress: null,
				username: null,
				password: null
			},
			accountcreated: false
		}
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		console.log(this.state.userData);
		const response = await API.createUser(this.state.userData);
		console.log(response);
		if (response.status === 200) this.setState({ accountcreated: true });
	};

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({ userData: { ...this.state.userData, [name]: value } });
	};

	renderRegForm = () => {
		// return <Register handleSubmit={this.handleSubmit} />;

		return (
			<Form noValidate>
				<Form.Group as={Row} controlId="formFirstName">
					<Form.Label column sm={2}>First Name</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="text"
							placeholder="First Name"
							name="firstname"
							onChange={this.handleInputChange}
							required
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Col>
				</Form.Group>

				<Form.Group as={Row} controlId="formLastName">
					<Form.Label column sm={2}>Last Name</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="text"
							placeholder="Last Name"
							name="lastname"
							onChange={this.handleInputChange}
							required
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Col>
				</Form.Group>

				<Form.Group as={Row} controlId="formEmail">
					<Form.Label column sm={2}>Email</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="email"
							placeholder="Email"
							name="emailaddress"
							onChange={this.handleInputChange}
							required
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Col>
				</Form.Group>

				<Form.Group as={Row} controlId="formUsername">
					<Form.Label column sm={2}>Username</Form.Label>
					<Col sm={10}>
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
							</InputGroup.Prepend>
							<Form.Control
								type="text"
								placeholder="Username"
								name="username"
								onChange={this.handleInputChange}
								required
							/>
							<Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
						</InputGroup>
					</Col>
				</Form.Group>

				<Form.Group as={Row} controlId="formPassword">
					<Form.Label column sm={2}>Password</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="password"
							placeholder="Password"
							name="password"
							onChange={this.handleInputChange}
							required
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Col>
				</Form.Group>

				<Button type="submit" onClick={this.handleSubmit}>Sign Up</Button>
			</Form>
		);
	}

	renderSignUpComplete = () => {
		return (
			<div>
				<h1 className="my-3">Your account has successfully been created!</h1>
				<div className="d-flex justify-content-center">
					<Button as={Link} to="/" className="p-3 m-3 w-25" style={{ fontSize: "20px" }}>Home</Button>
					<Button as={Link} to="/quizzes" className="p-3 m-3 w-25" style={{ fontSize: "20px" }}>Quizzes</Button>
					<Button as={Link} to="/leaderboard" className="p-3 m-3 w-25" style={{ fontSize: "20px" }}>Leaderboard</Button>
				</div>
			</div>
		);
	}

	render() {
		return (
			<Container className="my-auto">
				<Jumbotron className="px-5 py-4 m-0 text-center jumbo">
					{!this.state.accountcreated ? this.renderRegForm() : this.renderSignUpComplete()}
				</Jumbotron>
			</Container>
		);
	}
}

export default SignUp;
