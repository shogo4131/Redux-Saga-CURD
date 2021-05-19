const app = require('./app/app');

// port番号指定
const port = process.env.PORT || 3001;

// サーバー起動
app.listen(port);
