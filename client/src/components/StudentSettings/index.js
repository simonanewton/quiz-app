import React from "react";
import { Form } from "react-bootstrap";

function StudentSettings() {
    return (
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
    );
}

export default StudentSettings;