const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3');
const dbPath = 'src/app/db/database.sqlite3';

const app = express();

app.use(cors());

// get all users
app.get('/api/v1/users', (req, res) => {
  // DB接続
  const db = new sqlite3.Database(dbPath);

  db.all('select id, name, profile from users', (err, rows) => {
    res.json(rows);
  });
  db.close();
});

// get select user
app.get('/api/v1/users/:id', (req, res) => {
  // DB接続
  const db = new sqlite3.Database(dbPath);
  const id = req.params.id;

  db.get(`select * from users where id = ${id}`, (err, row) => {
    res.json(row);
  });
  db.close();
});

// search user name
app.get('/api/v1/search', (req, res) => {
  // DB接続
  const db = new sqlite3.Database(dbPath);
  const param = req.query.name;

  db.all(
    `select id, name, profile from users where name like "%${param}%"`,
    (err, rows) => {
      res.json(rows);
    }
  );
  db.close();
});

module.exports = app;
