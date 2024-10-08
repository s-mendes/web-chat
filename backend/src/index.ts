
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: parseInt(process.env.PORT || "8080") });

wss.on("connection", (ws) => {
  ws.on("error", console.error);

  console.log("WebSocket connection established");

  ws.on("message", (message) => {
    wss.clients.forEach((client) => {
      client.send(message.toString());
    });
  });

});
