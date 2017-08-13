const apiai = require("api.ai");
require('dotenv').config();

const nlp = new apiai({
    token: process.env.APIAI_ACCESS_TOKEN,
    session: new Date().getTime()
});

nlp.voice("test.wav", {
    language: "en"
}, function(error, response) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(response);
    }
});