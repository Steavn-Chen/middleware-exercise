const express = require('express')
const moment = require('moment')

const app = express()
const port = 3000

app.use('/new', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
  }, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
  }, (req, res, next) => {
  console.log('Time:', Date.now())
  next() 
  }, (req, res, next) => {
  const taipeiTime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
  console.log(`${taipeiTime} | ${req.method} from ${req.originalUrl}`);
  next()
})

app.get("/", (req, res) => {
  res.send("列出全部 Todo");
});

app.get("/new", (req, res) => {
  res.send("新增 Todo 頁面");
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
