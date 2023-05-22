# 短網址產生器

此專案提供使用者輸入一串網址，可以在伺服器啟動期間得到唯一組對應的短網址

於瀏覽器輸入此短網址可以導向原始網址的位置

畫面預覽：

![短網址產生器首頁](https://github.com/gibbs-shih/AC-project-shorten_url/assets/73210852/254dc71c-52ff-42f5-aeff-b0c653bfb510)
![必填欄位設計](https://github.com/gibbs-shih/AC-project-shorten_url/assets/73210852/93e571b9-4cc1-4df3-9956-f1f313a79988)
![縮網址頁面](https://github.com/gibbs-shih/AC-project-shorten_url/assets/73210852/738547ea-7809-49d5-bc0f-0fe8c17efa2f)
![複製成功提醒](https://github.com/gibbs-shih/AC-project-shorten_url/assets/73210852/6e2f629d-3b41-4ecd-82d3-cca7434b3ef2)


## 功能

- 輸入一串網址得到一組對應的短網址

- 輸入一樣的網址會得到一樣的短網址

- 若使用者未輸入內容就按下shorten按鈕, 會跳出必填欄位提醒 

- 點擊短網址連結, 可以於新分頁導向原始網址頁面 

- 點擊copy按鈕可以將得到的短網址複製於剪貼簿中, 並跳出複製成功提醒

- 點擊back按鈕可以返回主頁面


## 安裝

### 1.下載

開啟終端機(Terminal) cd 到欲存放專案的本機位置並執行:

`git clone https://github.com/gibbs-shih/AC-project-shorten_url`

### 2.初始

`npm install`  --> 安裝套件

### 3.開啟程式

`npm run dev`  --> 執行程式

終端顯示 `Express is listening on http://localhost:3000`、`mongodb connected!` 即啟動完成

請至 http://localhost:3000 開始使用程式

### 4.使用程式

於輸入框輸入網址後按下“Shorten”按鈕即可產生短網址

### 5.結束程式

於終端機案按下 `Ctrl + c` 即可結束程式


## 使用工具
- Node.js - 執行環境
- Visual Studio Code - 程式碼編輯器
- Express - 應用程式架構
- Express-Handlebars - 模板引擎
- Bootstrap - 開源前端框架
- MongoDB Atlas - 資料庫 
- Mongoose - ODM
- Git - 版本控制軟體
- RESTful API - 設計風格
