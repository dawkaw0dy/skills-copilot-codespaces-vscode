// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments.js
const comments = require('./comments');

// Create a route that sends all comments
app.get('/comments', (req, res) => {
    res.send(comments.all());
});

// Create a route that sends a single comment
app.get('/comments/:id', (req, res) => {
    res.send(comments.get(req.params.id));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});