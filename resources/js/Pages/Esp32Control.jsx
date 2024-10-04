// resources/js/Pages/Esp32Control.jsx
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function Esp32Control() {
    const [command, setCommand] = useState('');
    const [response, setResponse] = useState(null);

    const sendCommand = () => {
        Inertia.post('/esp32/command', { command }, {
            onSuccess: (res) => {
                setResponse(res.props.command);
            },
        });
    };

    return (
        <div>
            <h1>ESP32 Controller</h1>
            <input
                type="text"
                placeholder="Enter command"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
            />
            <button onClick={sendCommand}>Send Command</button>

            {response && <p>Response from ESP32: {response}</p>}
        </div>
    );
}
