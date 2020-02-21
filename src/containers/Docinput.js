import React, {useRef, useState} from 'react';
import {FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import LoaderButton from '../components/LoaderButton';
import config from '../config';
import './Docinput.css';
import {Storage} from 'aws-amplify';
import {s3UploadFile} from '../libs/awslib';
import {s3upload} from '../libs/s3lib';

export default function Docinput(props) {
    const file = useRef(null);
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function validateFile(){
        return content.length > 0;
    }

    function handleFilechange(event){
        file.current = event.target.files[0];
    }

    async function handleSubmit(event){
        event.preventDefault();
        if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
            alert(
              `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
                1000000} MB.`
            );
            return;
              }
              else {
                  s3upload(file);
                
        }
    }
    return (
        <div className = "Docinput">
         <form onSubmit={handleSubmit}>
          <FormGroup controlId = 'content'>
           <FormControl
            value = {content}
            componentClass = "textarea"
            onChange = {e => setContent(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId = "file">
           <ControlLabel>Attachment</ControlLabel>
           <FormControl onChange = {handleFilechange} type = "file" />
          </FormGroup>
          <LoaderButton
            block
            type = "submit"
            bsSize = "large"
            bsStyle = "primary"
            isLoading = {isLoading}
            disabled = {!validateFile()}
            >
            Create
            </LoaderButton>
         </form>
        </div>
    )
}