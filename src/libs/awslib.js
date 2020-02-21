// import React from 'react';
import {Storage} from 'aws-amplify';

export async function s3UploadFile(file){
 const fileName = `${Date.now()}-${file.name}`;
 const stored = await Storage.put(fileName, file, {
     contentType: file.type
 });

 return stored.key;
}