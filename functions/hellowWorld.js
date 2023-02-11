import axios from "axios";

exports.handler = async function (event, context) {
    const config = {
        method: 'get',
        url: 'https://gorest.co.in/public/v1/users?page=1',
        headers: {
        },
    };
    try {
        const response = await axios(config)
        console.log("response", response);
        return JSON.stringify(response.data)
    } catch (error) {
        return {
            statusCode: 422,
            body: `Error: ${error}`
        }
    }
    // const headers = new Headers()
    // headers.append("Content-Type", "application/json")

    // const body = {
    //     "test": "event"
    // }

    // const options = {
    //     method: "POST",
    //     headers,
    //     mode: "cors",
    //     body: JSON.stringify(body),
    // }

    // const res = await fetch("https://gorest.co.in/public/v1/users?page=1")
    // console.log("res", res);
    // return ({
    //     statusCode: 200, body: JSON.stringify({ statusText: 200 })
    // })
} 