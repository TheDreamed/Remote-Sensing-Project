const express = require('express');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: './apiKey.env' });

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, 'remoteSensing.html'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading remoteSensing.html');
      return;
    }
    const apiKey = process.env.API_KEY;
    const htmlContent = data.replace('API_KEY_PLACEHOLDER', apiKey);
    res.send(htmlContent);
  });
});

app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/img', express.static(path.join(__dirname, 'img')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
