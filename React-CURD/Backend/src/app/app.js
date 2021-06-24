const express = require('express');
const cors = require('cors');
const path = require('path');

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

module.exports = app;
