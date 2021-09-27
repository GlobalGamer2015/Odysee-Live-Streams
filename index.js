const express = require('express')
const app = express()
var port = 3000;
const hostname = 'localhost';
var http = require('http');
var io = require('socket.io')(http);
var server = require('http').createServer(app)
var listener = io.listen(server);
const path = require('path');

const stream = require('./stream')(io);

app.get('/', function (req,res) {
	res.sendFile(path.join(__dirname, './www', 'index.html'));
})
app.get('/streamers', function (req,res) {
	res.sendFile(path.join(__dirname, './www', 'streamers.html'));
})
app.get('/streamers_settings', function (req,res) {
	res.sendFile(path.join(__dirname, './www', 'streamers_settings.html'));
})

app.get('/localStorage.js', function (req,res) {
    res.sendFile(path.join(__dirname, './www', 'localStorage.js'));
})
app.get('/dataBlocks.js', function (req,res) {
    res.sendFile(path.join(__dirname, './www', 'dataBlocks.js'));
})
app.get('/dataHandler.js', function (req,res) {
    res.sendFile(path.join(__dirname, './www', 'dataHandler.js'));
})

listener.on('connection', function (socket) {
    console.log('Connection to client established');
    socket.on("load_streams", (data) => {
        if(data == "load moar!") {
            const stream = require('./stream')
            stream.GetStreams();
        }
    });
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});