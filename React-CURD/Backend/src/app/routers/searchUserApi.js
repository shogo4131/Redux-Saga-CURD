const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const dbPath = 'src/app/db/database.sqlite3';

/* ユーザー情報を検索 */
router.get('/api/v1/search', (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ message: 'ユーザー名が入力されていません' });
  }

  // DB接続
  const db = new sqlite3.Database(dbPath);

  try {
    db.all(
      `select id, name, profile from users where name like "%${name}%"`,
      (err, rows) => {
        res.status(200).json(rows);
      }
    );
  } catch (error) {
    res.status(500).json({ ErrorMessage: 'データを取得できませんでした' });
  } finally {
    db.close();
  }
});

module.exports = router;
