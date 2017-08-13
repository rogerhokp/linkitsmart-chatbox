'use strict';

var fs = require("fs");
require('dotenv').config();

// var apiai = require("../module/apiai");
var apiai = require("apiai");

var app = apiai(process.env.APIAI_ACCESS_TOKEN, {
    language: 'zh-hk'
});

var options = {
    sessionId: new Date().getTime()
};

var request = app.voiceRequest(options);

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

fs.readFile("test.wav", function(error, buffer) {
    if (error) {
        console.log(error);
    } else {
        request.write(buffer);
    }

    request.end();
});