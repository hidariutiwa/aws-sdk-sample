const aws = require('aws-sdk');
aws.config.update({region: 'ap-northeast-1'});

const s3 = new aws.S3();

/* s3.listBuckets((err, data) => {
    if (err) {
        console.log(err, err.stack);
    }
    else if(data) {
        console.log(data.Buckets);
    }
}); */

const bucketName = 'aoi-wiki-bucket';
var file = './kimura_test.txt';
const uploadParams = {
    Bucket: bucketName,
    Key: '',
    Body: ''
};

const fs = require('fs');
const fileStream = fs.createReadStream(file);
fileStream.on('error', (err) => {
    console.log(err, err.stack);
});
const path = require('path');
uploadParams.Body = fileStream;
uploadParams.Key = path.basename(file);

s3.upload(uploadParams, (err, data) => {
    if (err) {
            console.log(err, err.stack);
    }
    else if(data){
        console.log('upload success.');
        console.log(data.Location);
    }
});