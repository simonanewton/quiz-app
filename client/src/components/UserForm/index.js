import React, { Component } from 'react';
import { Container, Form, Button } from "react-bootstrap";

export class UserForm extends Component {
    state = {
        step: 1, 
        firstName: "",
        lastName: "",
        email: "",
        typeOfAccount: "",
        teacherName: "",
        className: "",
        displayName: "",
        password: "",
        themeColor: "",
        gradeLevel: "",
        studentHobby: ""
    }

    //Creating steps to go through form signup process
    //step 1: everyone completes... firstName, lastName, email, password

    //step 2: everyone completes.. displayName, typeOfAccount
        // will use a toggle 
            //if student: teacher dropdown, studentHobby
            //if teacher: className, themeColor, studentEmails

    //step 3: everyone sees.. confirmation of their inputs based on typeOfAccount
        //should there be a student confirmation and a teacher confirmation?

    //step 4: everyone sees.. Success message letting them know they are registered

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    //check for type of account set state based on input
    // typeOfUserAccount = typeOfAccountValue => {        
    //     switch(typeOfAccountValue){
    //         case "student":
    //             this.setState({
    //                 typeOfAccount: "student"
    //             })
    //         case "teacher":
    //             this.setState({
    //                 typeOfAccount: "teacher"
    //             })
    //     }
    // }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, typeOfAccount, teacherName, displayName, password, themeColor, gradeLevel, studentHobby } = this.state;
        
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

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
    }
}

export default UserForm
