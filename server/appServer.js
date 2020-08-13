const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3010;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/get', (req, res) => {
    res.send(port + 'get请求成功')}
)

app.post('/post', (req, res) => {
    console.log(req.body)
    res.send(port + 'post请求成功, 前端传输数据为'+req.body)}
);

app.listen(port, () => {    
    console.log(port + '端口启动')}
)
