const WebSocket = require("ws");

function initWebSocket(server) {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {
    console.log("WebSocket client connected");
    ws.send(JSON.stringify({ message: "Connected to Fake UPI WebSocket" }));
  });

  return wss;
}

module.exports = initWebSocket;