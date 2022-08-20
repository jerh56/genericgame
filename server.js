const express = require('express');
const compression = require('compression');
const logger = require('morgan');
const app = express();
const http = require('http');
const path = require('path');
const port = 8000;
app.use(compression());
app.use(logger('dev'));

// Use the whole root as static files to be able to serve the html file and
// the build folder
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '/videogame')));
// Send html on '/'path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, + '/videogame/index.html'));
})
// Create the server and listen on port
http.createServer(app).listen(app.get('port'), () => {
    console.log(`Game HTTP Server is running:${app.get('port')}`);
});