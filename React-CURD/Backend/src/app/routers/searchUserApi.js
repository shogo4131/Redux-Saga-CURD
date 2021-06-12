const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const dbPath = 'src/app/db/database.sqlite3';

/* ユーザー情報を検索 */
router.get('/api/v1/search', (req, res) => {
  // DB接続
  const db = new sqlite3.Database(dbPath);
  const param = req.query.name;

  try {
    db.all(
      `select id, name, profile from users where name like "%${param}%"`,
      (err, rows) => {
        res.json(rows);
      }
    );
  } catch (error) {
    res.json({ ErrorMessage: 'データを取得できませんでした' });
  } finally {
    db.close();
  }
});

module.exports = router;
