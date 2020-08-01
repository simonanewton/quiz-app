import React, { Component } from 'react';
import {Container, Form, Col, Button, Row } from "react-bootstrap"


class SignUp extends Component {

    state = {
        firstName: "",
        lastName: "",
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
            selectedOption: changeEvent.target.value
        });
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
            this.setState({
            username: "",
            password: ""
        });
    };

    render(){
        return(
            <Container>
            <h1>hello world</h1>

            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
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
                        onChange=""
                        />
                        <Form.Check
                        type="radio"
                        label="second radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        />
                    </Col>
                    </Form.Group>
                </fieldset>
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