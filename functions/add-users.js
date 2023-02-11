const query = require("./api");

exports.handler = async () => {
    const { data, errors } = await query();

    if (errors) {
        return {
            statusCode: 500,
            body: JSON.stringify(errors)
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ data })
    };
};