const aws = require('aws-sdk');
aws.config.update({region: 'ap-northeast-1'});

const s3 = new aws.S3();

s3.listBuckets((err, data) => {
    if (err) {
        console.log(err, err.stack);
    }
    else if(data) {
        console.log(data.Buckets);
    }
});