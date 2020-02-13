import React, { useState } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from '../components/LoaderButton';
import "./Login.css";
import * as AWS from 'aws-sdk/global';
import hooksLib from '../libs/hooksLib';
import { FileSystemCredentials } from "aws-sdk/global";
import { useFormFields } from "../libs/hooksLib";

export default function Login(props) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const[fields, handleFieldchange] = useFormFields({
        email: "",
        password: ""
    }); 

  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
  
    try {
    //   await Auth.signIn(email, password);
        if(fields.email==="demo@demo" && fields.password==="qwerty")
        props.userHasAuthenticated(true);
        props.history.push("/");
    } catch (e) {
      alert(e.message);
      setIsLoading(false);  
    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldchange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={fields.password}
            onChange={handleFieldchange}
            type="password"
          />
        </FormGroup>
        <LoaderButton
         block
         type="submit"
         bsSize="large"
         isLoading={isLoading}
         disabled={!validateForm()}
        >
        Login
        </LoaderButton>
      </form>
    </div>
  );
}