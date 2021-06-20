## 簡介 Brief Introduction
簡單扼要的家庭記帳本，可新增支出並按照類別篩選支出。


## 功能說明 Functions 
- 首頁列表呈現支出總清單，包含類別(代表icon)、支出日期、項目和金額，並有RWD響應式設計，友善不同裝置瀏覽。
- 使用者可以透過類別下拉式清單，查找該類別的支出明細，若該類別無相關支出，會出現提示訊息(暫無支出紀錄)。
- 使用者可以新增、修改及刪除支出資料，若要刪除資料，將跳出提醒再次確認。
- 新增或編輯支出資料時，若有必填資料未填，將跳出提醒且無法送出表單。


## 環境建置與需求 Prerequisites
- 開發環境 Visual Studio Code v1.56.2
- 執行環境 Node.js v10.15.0
- 框架 Express.js v4.17.1
- 模板引擎 Express-handlebars v5.3.2
- 實用套件 Nodemon v2.0.7
- 實用套件 just-handlebars-helpers v1.0.18
- 實用套件 method-override v3.0.0
- 資料庫操作 Mongoose v5.12.14


## 安裝與執行步驟 Installation and Execution
1.在本機電腦備妥欲存放的資料夾，在該資料夾開啟 Terminal執行clone複製指令
```
git clone https://github.com/dbw-studio/expense-tracker.git
```

2.進入專案資料夾
```
cd expense-tracker
```

3.安裝套件
```
npm i -y
```

4.啟動伺服器執行
```
npm run dev
```

5.當Terminal出現提示 `Server is listening localhost:3000`，表示伺服器已啟動，請用瀏覽器開啟 http://localhost:3000 ，即可開始使用程式

6.若要快速套入種子資料可執行
```
npm run seed
```
