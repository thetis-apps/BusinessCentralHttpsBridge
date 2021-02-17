var AWS = require('aws-sdk');
AWS.config.update({region:'eu-west-1'});

var SNS = new AWS.SNS({apiVersion: '2010-03-31'});

exports.transform = async (event, x) => {
    
    console.log(JSON.stringify(event));
    
    let detail = event.detail;
    
    let message = new Object();
    message.eventId = detail.eventId;
    message.documentId = detail.documentId;
    message.shipmentId = detail.shipmentId;

    let params = {
        Message: JSON.stringify(message),
        TopicArn: process.env.Topic
    };

    await SNS.publish(params).promise();
    
    return "DONE";
}
