const db = require('../db/database');

const User = {
  create: (name, email, password, callback) => {
    const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
    db.run(query, [name, email, password], function (err) {
      callback(err, this ? this.lastID : null);
    });
  },
  findByEmail: (email, callback) => {
    const query = `SELECT * FROM users WHERE email = ?`;
    db.get(query, [email], (err, row) => {
      callback(err, row);
    });
  }
};

module.exports = User;
