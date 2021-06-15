const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3');
const path = require('path');
const dbPath = 'src/app/db/database.sqlite3';

const app = express();
const usersRouter = require('./routers/userListApi');
const searchUserRouter = require('./routers/searchUserApi');

/* 全てのAPIのCORSを有効 */
app.use(cors());

/* リクエストのbodyをparse */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* publicディレクトリを静的ファイル群のルートディレクトリとして保存 */
app.use(express.static(path.join(__dirname, 'public')));

/* API */
app.use('/', usersRouter);
app.use('/', searchUserRouter);

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

module.exports = app;
