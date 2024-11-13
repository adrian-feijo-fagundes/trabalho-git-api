require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./db/database');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API E-commerce');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
