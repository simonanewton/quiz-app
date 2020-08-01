import React, { useState } from "react";
import {Button, Form, Container, Row} from "react-bootstrap";


const SignIn = () => {
  //const [username, setUsername] = useState();
  const [email, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("email is " + email);
    console.log("password is " + password);
  };

  return(
    <div>
      <Container>
      <h1>Welcome to QuizApp!</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control 
              type="text" 
              placeholder="Enter Username" 
              name='username'
              onChange={e => setUsername(e.target.value)}
              />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control 
            type="password" 
            placeholder="Password"
            name= "password"
            onChange={e => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <p className="signUpLink">Don't have an account? Sign Up</p>
            <p className="forgotPasswordLink">Forgot Password</p>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  )
};

export default SignIn;