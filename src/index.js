require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./db/database');

const PORT = process.env.PORT || 3000;

app.use(express.json());

const User = require('./models/User');
app.get('/', (req, res) => {
    res.send('API E-commerce');
});

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  User.create(name, email, password, (err, userId) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao registrar usuário' });
    } else {
      res.status(201).json({ message: 'Usuário registrado', userId });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
