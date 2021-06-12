const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const dbPath = 'src/app/db/database.sqlite3';

/* 全てのユーザー情報を取得します */
router.get('/api/v1/users', (req, res) => {
  const db = new sqlite3.Database(dbPath);

  try {
    db.all('select id, name, profile from users', (err, rows) => {
      res.json(rows);
    });
  } catch (error) {
    res.json({ errorMessage: 'データの取得に失敗しました' });
  } finally {
    db.close();
  }
});

module.exports = router;
