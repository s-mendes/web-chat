"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: parseInt(process.env.PORT || "8080") });
wss.on("connection", (ws) => {
    ws.on("error", console.error);
    console.log("WebSocket connection established");
    ws.on("message", (message) => {
        wss.clients.forEach((client) => {
            client.send(message.toString());
        });
    });
});
//# sourceMappingURL=index.js.map