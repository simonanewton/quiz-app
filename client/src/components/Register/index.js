import React, { Component, useState} from 'react';
import {Container, Form, Col, Button, Row, Jumbotron, InputGroup } from "react-bootstrap"
//import API from "../../utils/API"
//import store from "store";
import "./style.css";

class Register extends Component {

    constructor(props){
        super(props)
        this.state = {
            firstname: null,
            lastname: null,
            email: null,
            username: null,
            password: null
        };
    }

    renderRegForm(){
        //const [validated, setValidated] = useState(false);
    
        const handleSubmit = (event) => {
    //         const form = event.currentTarget;
    
    //         if (form.checkValidity() === false) {
    //             event.preventDefault();
    //             event.stopPropagation();
    //             //return
    //         }
    
    //         console.log(this.state)
    
    //         setValidated(true);
    
    //         // API.saveUser({
    //         //     firstname: this.state.firstname,
    //         //     lastname: this.state.lastname,
    //         //     email: this.state.email,
    //         //     username: this.state.username,
    //         //     password: this.state.password,
    //         // })
    //         // .then((res) => {
    //         //     const { history } = this.props;
    //         //     store.set(`loggedIn`, true);
    //         //     history.push(`/profile/${res.data._id}`);
    //         // })
    //         // .catch((err) => console.log(err));
        };
    
        return(
            //<Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form noValidate onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="formFirstName">
                    <Form.Label column sm={2}>
                    First Name
                    </Form.Label>
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
                    <Form.Label column sm={2}>
                    Last Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                            type="text" 
                            placeholder="Last Name" 
                            name="lasttname"
                            onChange={this.handleInputChange}
                            required
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formEmail">
                    <Form.Label column sm={2}>
                    Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                            type="email" 
                            placeholder="Email" 
                            name="email"
                            onChange={this.handleInputChange}
                            required
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formUsername">
                    <Form.Label column sm={2}>
                    Username
                    </Form.Label>
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
                            <Form.Control.Feedback type="invalid">
                            Please choose a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                </Form.Group>
                <Button type="submit">Submit form</Button>
            </Form>
        );
    }

    handleInputChange = (e) => {
        let value = e.target.value;
        const name = e.target.name;

        this.setState({ [name]: value });
    };

    render(){
        return(
            <Container className="my-auto">
                <Jumbotron className="px-5 py-4 m-0 text-center jumbo">
                    <h1>Sign Up</h1>

                    {this.renderRegForm()}
                </Jumbotron>
            </Container>
        )
    }
}

export default Register;