const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Retail Blockchain Transaction System');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});