import { WebSocketServer, WebSocket } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

let userCount = 0;
let allSockets: WebSocket[] = [];
let allMessages = [];


wss.on('connection', (ws) => {
    allSockets.push(ws);
    userCount++;
    console.log('Client connected User#:', userCount);

    ws.on('message', (message) => {
        console.log(`Received message: ${message.toString()}`);
        for (const socket of allSockets) {
            socket.send(message.toString()+` Users`); 

            //Continue From 39:00 in cohort

        }
        allMessages.push(message.toString());
    });

    ws.on('close', () => {
        console.log('Client disconnected');
        userCount--;
        if (userCount === 0) {
            console.log('No clients connected');
        }
    });
});

console.log('WebSocket server is running on ws://localhost:8080');