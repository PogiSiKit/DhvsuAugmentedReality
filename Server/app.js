const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

// Serve static files from the 'Public' directory
app.use(express.static(path.join(__dirname, '..', 'Public')));

// Serve static files from the 'node_modules' directory
app.use('/Assets', express.static(path.join(__dirname, '..', 'Assets')));

// Handle requests for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log('Server is listening on port ' + port);
    console.log('Website: http://localhost:' + port);
});
