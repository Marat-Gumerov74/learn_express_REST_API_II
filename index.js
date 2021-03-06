const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

let users = [];

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
    console.log(`Server is work on 3000`);
});

io.on('connection', (socket) => {
    socket.on('login', (data) => {
        const found = users.find((nickname) => {
            return nickname === data;
        })

        if(!found){
            users.push(data);
            io.sockets.emit('login',{status: 'OK'});
        } else {
            io.sockets.emit('login',{status: 'Failed'});
        }
    });
});