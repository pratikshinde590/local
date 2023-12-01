import axios from "axios";

const baseUrl = process.env.NODE_ENV === 'development'? 'http://127.0.0.1:5000/':'https://cryptoapi-dev.techdomeaks.com/';
console.log("BaseURL being used:", baseUrl );

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'development'? 'http://127.0.0.1:5000/':'https://cryptoapi-dev.techdomeaks.com/',
});

export default instance