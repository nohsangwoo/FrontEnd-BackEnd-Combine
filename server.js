const express = require('express');
const path = require('path');
const app = express();

const PORT = 8080;
const http = require('http').createServer(app);

const activeHttp = () => {
  console.log('listening on ' + PORT);
};
http.listen(PORT, activeHttp);

// 미들웨어 사용법
// public이란 폴더를 사용하도록 끌어오겠다
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/react', express.static(path.join(__dirname, 'react-project/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/react', function (req, res) {
  res.sendFile(path.join(__dirname, 'react-project/build/index.html'));
});
// user가 url로 입력하는 모든 get 요청은 react HTML로 보내라(라우팅 react로 떠넘기기)
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'react_project/build/index.html'));
// });
