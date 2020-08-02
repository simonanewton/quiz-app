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
        const selection = this.state.typeOfAccount;

        const studentSettings = (<p>Student</p>);

        const teacherSettings = (<p>Teacher</p>);

        if(!selection){
            return
        }
        
        console.log(this.state.typeOfAccount)

        return selection === "student" ? studentSettings : teacherSettings;
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
                            name="username"
                            onChange={this.handleInputChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPassword">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2}>
                        Type of Account
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                        type="radio"
                        label="Teacher"
                        name="typeOfAccount"
                        id="Teacher"
                        value="teacher"
                        checked={this.state.typeOfAccount === "teacher"}
                        onChange={this.handleOptionChange}
                        />
                        <Form.Check
                        type="radio"
                        label="Student"
                        name="typeOfAccount"
                        id="Student"
                        value="student"
                        checked={this.state.typeOfAccount === "student"}
                        onChange={this.handleOptionChange}
                        />
                    </Col>
                    </Form.Group>
                </fieldset>
                {this.renderSignUpType()}
                <Button variant="primary" type="submit" onClick={this.handleFormSubmit}>
                    Submit
                </Button>
            </Form>

            </Container>
        )
    }
}

export default SignUp;