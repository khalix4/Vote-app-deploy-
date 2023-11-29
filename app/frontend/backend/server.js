const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// In-memory storage for votes (replace with a database in a real-world scenario)
let votes = {
    'Candidate 1': 0,
    'Candidate 2': 0,
};

// API endpoint for submitting votes
app.post('/api/vote', (req, res) => {
    const { vote } = req.body;

    if (vote && votes.hasOwnProperty(vote)) {
        votes[vote] += 1;
        res.json({ success: true, vote });
    } else {
        res.status(400).json({ success: false, error: 'Invalid vote.' });
    }
});

// API endpoint for getting current vote counts
app.get('/api/votes', (req, res) => {
    res.json(votes);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
