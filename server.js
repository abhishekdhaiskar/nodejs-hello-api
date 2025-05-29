const express = require('express');
const config = require('config');

const app = express();
const port = config.get('port') || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js API!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
