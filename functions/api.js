const axios = require("axios");

module.exports = async (query = {}) => {
    const { method = "GET", data, headers } = query
    const result = await axios({
        url: "https://gorest.co.in/public/v1/users?page=1",
        method, data, headers
    });

    return result.data;
};