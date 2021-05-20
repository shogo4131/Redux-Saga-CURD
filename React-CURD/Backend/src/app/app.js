const express = require('express');
const sqlite3 = require('sqlite3');
const dbPath = 'src/app/db/database.sqlite3';

const app = express();

// get all users
app.get('/api/v1/users', (req, res) => {
  // DB接続
  const db = new sqlite3.Database(dbPath);

  db.all('select * from users', (err, rows) => {
    res.json(rows);
  });
  db.close();
});

// get user
app.get('/api/v1/users/:id', (req, res) => {
  // DB接続
  const db = new sqlite3.Database(dbPath);
  const id = req.params.id;

  db.get(`select * from users where id = ${id}`, (err, row) => {
    res.json(row);
  });
  db.close();
});

// get user name
app.get('/api/v1/search', (req, res) => {
  // DB接続
  const db = new sqlite3.Database(dbPath);
  const param = req.query.q;

  db.all(`select * from users where name like "%${param}%"`, (err, rows) => {
    res.json(rows);
  });
  db.close();
});

module.exports = app;
