var AWS = require('aws-sdk');
AWS.config.update({region:'eu-west-1'});

const axios = require('axios');

exports.transform = async (event, x) => {
    
    console.log(JSON.stringify(event));
    
    let detail = event.detail;
    
    let message = new Object();
    message.eventId = detail.eventId;
    message.documentId = detail.documentId;
    message.shipmentId = detail.shipmentId;

    let endpointURL = process.env.EndpointURL;
    await axios.post(endpointURL, message, { headers: { "Content-Type": "application/json" }});
    
    return "DONE";
};
