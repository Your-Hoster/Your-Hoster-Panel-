// App.js
import React, { useState } from 'react';

function App() {
    const [serverStatus, setServerStatus] = useState("Gestoppt");

    const startServer = async () => {
        try {
            const response = await fetch('http://localhost:3000/start', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ serverId: 1 })
            });
            if (response.ok) {
                setServerStatus("Gestartet");
            } else {
                alert("Fehler beim Starten des Servers");
            }
        } catch (error) {
            console.error("Fehler:", error);
        }
    };

    const stopServer = async () => {
        try {
            const response = await fetch('http://localhost:3000/stop', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ serverId: 1 })
            });
            if (response.ok) {
                setServerStatus("Gestoppt");
            } else {
                alert("Fehler beim Stoppen des Servers");
            }
        } catch (error) {
            console.error("Fehler:", error);
        }
    };

    return (
        <div className="App">
            <h1>Server Control Panel</h1>
            <p>Server Status: {serverStatus}</p>
            <button onClick={startServer}>Start Server</button>
            <button onClick={stopServer}>Stop Server</button>
        </div>
    );
}

export default App;
