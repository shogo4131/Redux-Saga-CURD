const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3');
const path = require('path');
const dbPath = 'src/app/db/database.sqlite3';

const app = express();
const getUsersRouter = require('./routers/userListApi');
const searchUserRouter = require('./routers/searchUserApi');

/* 全てのAPIのCORSを有効 */
app.use(cors());

/* リクエストのbodyをparse */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* publicディレクトリを静的ファイル群のルートディレクトリとして保存 */
app.use(express.static(path.join(__dirname, 'public')));

/* エンドポイント */
app.use('/', getUsersRouter);
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

const run = async (sql, db) => {
  return new Promise((resolve, reject) => {
    db.run(sql, (err) => {
      if (err) {
        return reject(err);
      } else {
        return resolve();
      }
    });
  });
};

/* ユーザーを登録 */
app.post('/api/v1/users', async (req, res) => {
  if (!req.body.name || req.body.name === '') {
    res.status(400).json({ message: 'ユーザー名が指定されていません。' });
  } else {
    // Connect database
    const db = new sqlite3.Database(dbPath);

    const name = req.body.name;
    const profile = req.body.profile ? req.body.profile : '';

    try {
      await run(
        `INSERT INTO users (name, profile) VALUES ("${name}", "${profile}")`,
        db
      );
      res.status(201).json({ message: '新規ユーザーを作成しました。' });
    } catch (e) {
      res.status(500).json({ error: 'ユーザーの登録に失敗しました' });
    }

    db.close();
  }
});

module.exports = app;
