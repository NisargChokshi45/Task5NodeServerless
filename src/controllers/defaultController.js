"use strict";

// Event contains the Request Payload for the lambda function
// Context contains the meta information for the lambda function such as stage, arn, IAM user information, etc.
// Locally context stores almost nothing
// Callback is same as the Node pattern (error, data)
module.exports.handler = async (event, context, callback) => {
    callback(null, {
        statusCode: 200,
        headers: {},
        body: JSON.stringify({
            is_error: false,
            message: "Lambda Executed for /hello Route",
            data: "AWS Serverless"
        })
    })

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Going Serverless! The Lambda Function executed successfully', input: event };
};
