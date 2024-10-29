// server.js
const express = require('express');
const DockerController = require('./DockerController');
const app = express();
app.use(express.json());

app.post('/start', async (req, res) => {
    const { serverId } = req.body;
    try {
        await DockerController.startServer(serverId);
        res.send(`Server ${serverId} wurde erfolgreich gestartet.`);
    } catch (error) {
        res.status(500).send(`Fehler beim Starten von Server ${serverId}: ${error.message}`);
    }
});

app.post('/stop', async (req, res) => {
    const { serverId } = req.body;
    try {
        await DockerController.stopServer(serverId);
        res.send(`Server ${serverId} wurde erfolgreich gestoppt.`);
    } catch (error) {
        res.status(500).send(`Fehler beim Stoppen von Server ${serverId}: ${error.message}`);
    }
});

app.listen(3000, () => console.log('Backend läuft auf Port 3000'));
