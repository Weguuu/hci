// filepath: c:\Users\jnlds\Downloads\sayt\server.js
const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Serve static files for the bounce-game
app.use('/Build', express.static(path.join(__dirname, 'bounce-game/Build')));
app.use('/TemplateData', express.static(path.join(__dirname, 'bounce-game/TemplateData')));

// HTTPS options
const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
};

// Start the HTTPS server
https.createServer(options, app).listen(3000, () => {
    console.log('HTTPS server running at https://localhost:3000');
});