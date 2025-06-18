import { WebSocketServer, WebSocket } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

let allSockets: { socket: WebSocket; room: string; username: string }[] = [];

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const parsedMessage = JSON.parse(message.toString());

    if (parsedMessage.type === 'join') {
      allSockets.push({
        socket: ws,
        room: parsedMessage.payload.roomId,
        username: parsedMessage.payload.username
      });

      ws.send(JSON.stringify({ system: true, message: `Welcome, ${parsedMessage.payload.username}!` }));
    }

    if (parsedMessage.type === 'chat') {
      const sender = allSockets.find(user => user.socket === ws);
      if (!sender) return;

      const roomUsers = allSockets.filter(user => user.room === sender.room);
      const outgoingMessage = {
        username: sender.username,
        message: parsedMessage.payload.message
      };

      roomUsers.forEach(user => {
        user.socket.send(JSON.stringify(outgoingMessage));
      });
    }
  });

  ws.on('close', () => {
    allSockets = allSockets.filter(user => user.socket !== ws);
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
