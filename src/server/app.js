const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 8080 });

server.on("connection", (ws) => {
  ws.send("Welcome to the WebSocket server!");

  ws.on("message", (message) => {
    ws.send(`Server received: ${message}`);
  });

  ws.on("close", () => {
    console.log("A client disconnected.");
  });
});
