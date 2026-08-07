import axios from "axios";


const API = axios.create({

    baseURL: "http://127.0.0.1:8000"

});


// Chat AI

export const chatAI = (message) => {

    return API.post("/chat", {

        message: message

    });

};


// YouTube Script Generator

export const generateScript = (topic) => {

    return API.post("/script", {

        topic: topic

    });

};


export default API;