const express = require('express');
const https = require('https');
const fs = require('fs');
const WebSocket = require('ws');

const app = express();
const config = require('../config/config.json');

const server = https.createServer({
  key: fs.readFileSync(config.ssl.key),
  cert: fs.readFileSync(config.ssl.cert)
}, app);

const wss = new WebSocket.Server({ server });

app.use(express.json());

app.post('/api/state', (req, res) => {
  const state = req.body;
  // Broadcast to all connected clients
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(state));
    }
  });
  res.sendStatus(200);
});

server.listen(config.port, () => {
  console.log(`Server is running on https://localhost:${config.port}`);
});
