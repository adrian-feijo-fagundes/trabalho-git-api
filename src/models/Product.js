const db = require('../db/database');

const Product = {
  create: (name, description, price, stock, callback) => {
    const query = `INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)`;
    db.run(query, [name, description, price, stock], function (err) {
      callback(err, this ? this.lastID : null);
    });
  },
  findById: (id, callback) => {
    const query = `SELECT * FROM products WHERE id = ?`;
    db.get(query, [id], (err, row) => {
      callback(err, row);
    });
  },
  findAll: (callback) => {
    const query = `SELECT * FROM products`;
    db.all(query, [], (err, rows) => {
      callback(err, rows);
    });
  }
};

module.exports = Product;
