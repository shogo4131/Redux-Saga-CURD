const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const usersRouter = require('./routers/userListApi');
const searchUserRouter = require('./routers/searchUserApi');

/* localhost:3000からのみアクセス許可 */
app.use(
  cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
  })
);

/* リクエストのbodyをparse */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* publicディレクトリを静的ファイル群のルートディレクトリとして保存 */
app.use(express.static(path.join(__dirname, 'public')));

/* API */
app.use('/', usersRouter);
app.use('/', searchUserRouter);

module.exports = app;
