import React from "react";
import { Container, Jumbotron, Form, Button } from "react-bootstrap";

function FormLayout() {
    return (
        <Jumbotron>
            <Container>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <p>Don't have an account? Sign Up</p>
                </Form>
            </Container>
        </Jumbotron>
    );
}

export default SignIn;