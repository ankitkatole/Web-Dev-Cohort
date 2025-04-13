import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function (socket) {
  console.log("Client Connected");
  // socket.send("Hello");
  // setInterval(() => {
  //   socket.send("Hello Member");
  // }, 500);

  // socket.on("message", function (message) { //Message Handler
  //   console.log("Received: " + message.toString());
  // });


  socket.on("message", function (messsage) {
    if (messsage.toString() == "ping") {
      socket.send("pong");
    }
  })

  socket.on("close", function () { //Client Disconnected
    console.log("Client Disconnected");
  }
  );
  socket.on("error", function (error) { //Error Handler
    console.log("Error: " + error);
  }
  );
})