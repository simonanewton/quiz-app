import React, { Component } from 'react';
import {Container, Form, Col, Button, Row } from "react-bootstrap"


class SignUp extends Component {

    state = {
        name: "",
        email: "",
        username: "",
        password: "",
        typeOfAccount: "",
        className: "",        
        themeColor: "",
        gradeLevel: "",
        teacherName: "",
        studentHobby: ""
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;
    
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    renderSignUpType (){
        const studentSettings = (<p>Student</p>);

        const teacherSettings = (<p>Teacher</p>);

        if(!this.state.typeOfAccount){
            return
        }

        return this.state.typeOfAccount === "student" ? studentSettings : teacherSettings;
    }

    handleOptionChange = changeEvent => {
        this.setState({
            typeOfAccount: changeEvent.target.value
        });
    };
    
    handleFormSubmit = event => {
    
        event.preventDefault();
            
        console.log(this.state);
    };

    render(){
        return(
            <Container>
            <h1>hello world</h1>

            <Form>
                <Form.Group as={Row} controlId="formName">
                    <Form.Label column sm={2}>
                    Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                            type="text" 
                            placeholder="Name" 
                            value={this.state.name}
                            name="name"
                            onChange={this.handleInputChange}
                            required
                        />
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
                            value={this.state.email}
                            name="email"
                            onChange={this.handleInputChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formUsername">
                    <Form.Label column sm={2}>
                    Username
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                            type="text" 
                            placeholder="Username" 
                            value={this.state.username}
                            name="name"
                            onChange={this.handleInputChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2}>
                        Radios
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                        type="radio"
                        label="first radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        />
                        <Form.Check
                        type="radio"
                        label="second radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        />
                        <Form.Check
                        type="radio"
                        label="third radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                        />
                    </Col>
                    </Form.Group>
                </fieldset>
                <Form.Group as={Row} controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Form.Check label="Remember me" />
                    </Col>
                </Form.Group>
                {this.renderSignUpType()}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            </Container>
        )
    }
}

export default SignUp;