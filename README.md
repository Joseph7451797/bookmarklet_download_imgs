# README #

這是一個實驗性與娛樂性兼具的的書籤小工具，主要用來抓取網頁圖片

### 使用什麼技術？ ###
- HTML5 a 標籤 "download" 屬性
- HTML a 標籤 href="javascript:dosomething();"

### 瀏覽器相容性 ###
- Google Chrome 完整支援
- Forefox 僅支援同源圖片連結 
- 更多資訊：[caniuse.com](http://caniuse.com/#search=download)

### 如何自娛娛人？ ###

git clone 這個 repo.，並 cd 到目錄，首先安裝開發必須模組
```sh
npm install
```  
開啟開發、自娛模式
```sh
npm run hot-dev #然後瀏覽器打開http://localhost:8080觀賞佳作
```
如果有修改原始碼（歡迎fork），使用產出模式打包、壓縮程式碼 
```sh
npm run build
```

### License ###
MIT License