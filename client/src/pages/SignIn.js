import React, { Component } from "react";
import {Button, Form, Container, Jumbotron} from "react-bootstrap";
import { Link } from "react-router-dom";


class SignIn extends Component {
  // Setting the component's initial state
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {

    event.preventDefault();
    // this.setState({
    //   username: "",
    //   password: ""
    // });

    console.log(this.state)
  };

  render() { return(
       <Container className="my-auto">
        <Jumbotron className="px-5 py-4 m-0 text-center jumbo">
          <h1>Welcome to QuizApp!</h1>
            <Form>
              <Form.Group controlId="formUsername">
                <Form.Control 
                  value={this.state.username}
                  type="text" 
                  placeholder="Enter Username" 
                  name='username'
                  onChange={this.handleInputChange}
                  />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                value={this.state.password} 
                type="password" 
                placeholder="Password"
                name= "password"
                onChange={this.handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <p className="signUpLink">Don't have an account? <Link to="/signup">Sign Up</Link></p>
                <p className="forgotPasswordLink">Forgot Password</p>
              </Form.Group>
              <Button variant="primary" type="submit" onClick={this.handleFormSubmit}>
                Submit
              </Button>
            </Form>
        </Jumbotron>
      </Container>
  )
  }
};

export default SignIn;