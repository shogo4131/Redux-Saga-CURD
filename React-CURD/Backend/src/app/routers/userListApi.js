const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const dbPath = 'src/app/db/database.sqlite3';

/* 全てのユーザー情報を取得 */
router.get('/api/v1/users', (req, res) => {
  const db = new sqlite3.Database(dbPath);

  try {
    db.all('select id, name, profile from users', (err, rows) => {
      res.json(rows);
    });
  } catch (e) {
    res.status(500).json({ errorMessage: 'データの取得に失敗しました' });
  } finally {
    db.close();
  }
});

/* 特定のユーザー情報を取得 */
router.get('/api/v1/users/:id', (req, res) => {
  // DB接続
  const db = new sqlite3.Database(dbPath);
  const id = req.params.id;

  db.get(`select * from users where id = ${id}`, (err, row) => {
    res.status(200).json(row);
  });
  db.close();
});

/* ユーザーを登録 */
router.post('/api/v1/users', async (req, res) => {
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
      res.status(200).json({ message: '新規ユーザーを作成しました。' });
    } catch (e) {
      res.status(500).json({ error: 'ユーザーの登録に失敗しました' });
    } finally {
      db.close();
    }
  }
});

/* ユーザー情報を削除 */
router.delete('/api/v1/users/:id', async (req, res) => {
  const db = new sqlite3.Database(dbPath);
  const id = req.params.id;

  db.get(`select * from users where id = ${id}`, async (err, row) => {
    if (row) {
      try {
        await run(`delete from users where id = ${id}`, db);
        res.status(200).json({ message: 'ユーザーの削除に成功しました' });
      } catch (e) {
        console.log(e);
      } finally {
        db.close();
      }
    } else {
      res
        .status(500)
        .json({ errorMessage: '指定したユーザーは見つかりませんでした' });
    }
  });
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

module.exports = router;
