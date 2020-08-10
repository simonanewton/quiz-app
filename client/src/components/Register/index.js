import React, { Component } from 'react';
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import API from '../../utils/API';
// import store from 'store';
import './style.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: null,
            lastname: null,
            emailaddress: null,
            username: null,
            password: null,
            redirectTo: null
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (event) => {
		event.preventDefault();
        const response = await API.createUser(this.state)
        console.log(this.state);
		console.log(response);
		if (response.status === 200) this.props.handleSuccess();
	};

    render() {
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
}

export default Register;
