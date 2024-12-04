const WebSocket = require("ws");

const PORT = 8080;
const server = new WebSocket.Server({ port: PORT });

console.log(`WebSocket server is running on ws://localhost:${PORT}`);

server.on("connection", (ws) => {
  console.log("A new client connected!");

  // Send a welcome message to the client
  ws.send("Welcome to the WebSocket server!");

  // Listen for messages from the client
  ws.on("message", (message) => {
    console.log(`Received: ${message}`);

    // Echo the message back to the client
    ws.send(`Server received: ${message}`);
  });

  // Handle client disconnection
  ws.on("close", () => {
    console.log("A client disconnected.");
  });
});
