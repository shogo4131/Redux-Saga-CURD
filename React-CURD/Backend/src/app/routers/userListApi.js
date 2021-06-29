const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const dbPath = 'src/app/db/database.sqlite3';

/* 全てのユーザー情報を取得 */
router.get('/api/v1/users', (req, res) => {
  const db = new sqlite3.Database(dbPath);

  try {
    db.all('select id, name, profile from users', (err, rows) => {
      res.status(200).json(rows);
    });
  } catch (e) {
    res.status(500).json({ errorMessage: 'データの取得に失敗しました' }, e);
  } finally {
    db.close();
  }
});

/* 特定のユーザー情報を取得 */
router.get('/api/v1/users/:id', (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ errorMessage: '指定されたidがありません' });
  }

  // DB接続
  const db = new sqlite3.Database(dbPath);

  try {
    db.get(
      'select id, name, profile from users where id = ?',
      [id],
      (err, row) => {
        row
          ? res.status(200).json(row)
          : res.status(400).json({ message: '該当データがありませんでした' });
      }
    );
  } catch (e) {
    res.status(500).json({ errorMessage: 'データの取得に失敗しました' }, e);
  } finally {
    db.close();
  }
});

/* ユーザー情報を登録 */
router.post('/api/v1/users', async (req, res) => {
  const { name, profile } = req.body;

  if (!name || name.length > 10) {
    return res.status(400).json({ errorMessage: '名前が入力されていません' });
  }

  if (!profile || profile.length > 30) {
    return res
      .status(400)
      .json({ errorMessage: 'プロフィールが入力されていません' });
  }

  /* データベース接続 */
  const db = new sqlite3.Database(dbPath);

  try {
    await run(
      `INSERT INTO users (name, profile) VALUES ("${name}", "${profile}")`,
      db
    );
    res.status(200).json({ message: '新規ユーザーを作成しました。' });
  } catch (e) {
    res.status(500).json({ error: 'ユーザーの登録に失敗しました' }, e);
  } finally {
    db.close();
  }
});

/* ユーザー情報を更新 */
router.put('/api/v1/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, profile } = req.body;

  if (!id) {
    return res.status(400).json({ errorMessage: '指定されたidがありません' });
  }

  if (!name || name.length > 10) {
    return res.status(400).json({ errorMessage: '名前が入力されていません' });
  }

  if (!profile || profile.length > 30) {
    return res.status(400).json;
  }
  const db = new sqlite3.Database(dbPath);

  db.get('select * from users where id = ?', [id], async (err, row) => {
    if (row) {
      try {
        await run(
          `update users set name="${name}", profile="${profile}" where id = ${id}`,
          db
        );
        res.status(200).json({ message: 'ユーザーの更新に成功しました' });
      } catch (e) {
        res.status(500).json({ errorMessage: 'ユーザーの更新に失敗しました' });
      } finally {
        db.close();
      }
    } else {
      res.status(404).json({ message: '該当のユーザーが見つかりませんでした' });
    }
  });
});

/* ユーザー情報を削除 */
router.delete('/api/v1/users/:id', async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ errorMessage: '指定されたidがありません' });
  }

  const db = new sqlite3.Database(dbPath);

  db.get('select * from users where id = ?', [id], async (err, row) => {
    if (row) {
      try {
        await run(`delete from users where id = ${id}`, db);
        res.status(200).json({ message: 'ユーザーの削除に成功しました' });
      } catch (e) {
        res
          .status(400)
          .json({ errorMessage: 'ユーザーの削除に失敗しました' }, e);
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
