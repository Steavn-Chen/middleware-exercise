const express = require('express')
const moment = require('moment')

const app = express()
const port = 3000

app.use('/',  (req, res, next) => {
  const requestTime = Date.now()
  const taipeiTime = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
  const { method, originalUrl } = req
  res.on('finish', () => {
    const responseTime = Date.now() 
    const result = responseTime - requestTime;
    console.log(
      `${taipeiTime} | ${method} from ${originalUrl} | total time : ${result} ms`
    );
  })
  next()
})

app.get("/", (req, res) => {
  res.send("列出全部 Todo");
});

app.get("/new", (req, res) => {
  res.send(`<form action='/' method=POST>新增 Todo 頁面<button type="submit"> Submit </button></form>`);
});

app.get("/:id", (req, res) => {
  res.send("顯示一筆 Todo");
});

app.post("/", (req, res) => {
  res.send("新增一筆  Todo");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
