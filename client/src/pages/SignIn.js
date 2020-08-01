import React, { useState } from "react";
import {Button, FormGroup, FormControl, Form} from "react-bootstrap";


const Signup = () => {
  //const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("email is " + email);
    console.log("password is " + password);
  };

  return(
    <div>
      <Form onSubmit={handleSubmit}>
        
      </Form>
    </div>
  )
};

export default Signup;