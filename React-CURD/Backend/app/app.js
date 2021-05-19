const express = require('express');

const app = express();

app.get('/api/v1/hello', (req, res) => {
  res.json({ message: 'こんにちは' });
});

module.exports = app;
