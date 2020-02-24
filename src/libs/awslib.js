// import React from 'react';
import {Storage} from 'aws-amplify';

export async function s3UploadFile(file){
 const fileName = `JaiShriKrishna/${file.name}`;
 const stored = await Storage.put(fileName, file, {
     contentType: file.type
 });
 console.log('uploaded');
 return stored.key;
}

export async function s3GetFile(getFileKey){
    var key = `JaiShriKrishna/${getFileKey}`;
    console.log(key);
    var ur = await Storage.get(key);
    console.log(ur);
    return ur;
}