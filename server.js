const express = require('express'),
    app = express(),
    request = require('request');

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.listen(3000)