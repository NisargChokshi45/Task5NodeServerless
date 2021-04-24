module.exports.handler = (event, context, callback) => {
    const { id } = event.pathParameters;
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            data: {
                id: 1,
                name: "clean up",
                status: "open",
            },
            id: id
        }),
    });
};
