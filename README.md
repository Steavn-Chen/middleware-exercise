# Middleware 實作練習 
  藉由本專案練習，對 request 進來到 response 回去會經過一系列的流程，在這流程裡的程序，
  都叫做 middleware ， 此次練習目的為強化開發者對 middleware 的觀念。
## 功能

| 條件             | 結果                    |
| -----------------|:----------------------:|
| 時間戳計:(Taipei) |例: YYYY-MM-SS HH:mm:ss |
| HTTP 的方法       | GET/POST               |
| URL              |  /, /new, /:id         |
| response-time    |  ?? ms                 |
  ####  
   **在本伺服器啓動後對每條路由的請求，最後在伺服器要看到的訊息 例如: 2022-03-22 10:46:51 | GET from /new | total time : 10 ms**


## 啓動方式

- 將專案 clone 到本地端

https://github.com/Steavn-Chen/middleware-exercise.git

- 進入到專案資料夾
```
- 安裝 npm
```
  npm install
```
- 啓動專案
```
  npm run dev
```
- 若終端機顥示出以下字串，表示成功。
```
  App running on port 3000

 ## 開發環境

 - Node.js v14.15.1
 - express: 4.17.3

 ## 使用的套件

- moment: 2.29.1