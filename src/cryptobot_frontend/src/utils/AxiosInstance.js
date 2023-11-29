import axios from "axios";

const baseUrl = process.env.NODE_ENV === 'development'? 'http://127.0.0.1:5000/':'https://cryptoflask.azurewebsites.net/';
console.log("BaseURL being used:", baseUrl );

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'development'? 'http://127.0.0.1:5000/':'https://cryptoflask.azurewebsites.net/',
});

export default instance