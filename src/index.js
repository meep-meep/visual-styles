var express = require('express');
var serveStatic = require('serve-static');


var app = express();

app.use(
    '/styles',
    serveStatic(path.join(
        __dirname,
        '..',
        'style'
        ))
);


module.exports = app;
