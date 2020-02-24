import React from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
// import config from "../config";
import {s3GetFile} from '../libs/awslib';
import { useFormFields } from "../libs/hooksLib";

export default function Docoutput(props){
    var img = document.querySelector("img");
    const [fields,handleFieldchange] = useFormFields({
    key: ""
    // folder: ""
    });
    
    function validateName(){
    return fields.key.length > 0;
    }

    async function handleSubmit(event){
    event.preventDefault();
    try{
        console.log(fields.key);
        let ur = await s3GetFile(fields.key);
        img.setAttribute("src",ur);
    }
    catch(e){
        alert(e);
    }
    }
    return(
        <div className = 'Docoutput'>
            <form onSubmit={handleSubmit}>
        <FormGroup controlId="key" bsSize="small">
          <ControlLabel>key</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={fields.key}
            onChange={handleFieldchange}
          />
        </FormGroup>
        {/* <FormGroup controlId="folder" bsSize="small">
          <ControlLabel>folder</ControlLabel>
          <FormControl
            value={fields.folder}
            onChange={handleFieldchange}
            type="text"
          />
        </FormGroup> */}
        <LoaderButton
         block
         type="submit"
         bsSize="large"
        //  isLoading={isLoading}
         disabled={!validateName()}
        >
        Fetch
        </LoaderButton>  
          </form>
          <img alt = "Your Data"></img>
        </div>
    )
}    