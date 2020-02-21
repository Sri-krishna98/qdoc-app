import AWS from 'aws-sdk';

AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:9b4b6b97-13c3-4856-85e8-2e62556cb7c5',
});

var bucket = new AWS.S3({
    params: {
        Bucket: 'test-lambda-tt'
    }
});
export function s3upload(file){
    const attachment = file.current;
    let objKey = `JaiShriKrishna/${file.current.name}`;
    console.log(objKey);
    let params = {
        Key: objKey,
        Body: attachment,
    };


    bucket.putObject(params).promise()
        .then((res) => {
            console.log("uploaded", res);
            // objKey = JSON.stringify(attachment);
            let params_get = {
                Key: objKey
            }
            
            bucket.getObject(params_get).promise()
                .then((data) => { 
                    console.log('retrieved')

                })

        })
    }
