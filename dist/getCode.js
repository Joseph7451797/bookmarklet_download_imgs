!function(e){function t(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var o={};t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=9)}([function(e,t,o){"use strict";function n(){return void 0!==navigator.language?navigator.language:"zh-TW"}function a(){var e=document.querySelectorAll("*"),t=e.length,o=0,n=void 0;if(t)for(var a=0;a<t;a++)(n=document.defaultView.getComputedStyle(e[a],null).getPropertyValue("z-index"))>o&&"auto"!==n&&(o=n);return+o}Object.defineProperty(t,"__esModule",{value:!0}),t.getBrowserLanguage=n,t.getHighestZindex=a},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.textCantFindImgs=t.textDownloadThis=t.textSelectAll=t.hintAllowBrowserDownloadMultiple=t.textDownloadSelected=t.textClose=t.textOpenDownloadPopup=t.msgGetCodeAlert=t.textDemopage=t.appName=void 0;var n=o(0),a="zh-TW"===(0,n.getBrowserLanguage)(),r=a?"抓圖工具小視窗":"Bookmarklet-Download-Imgs",l=a?'<h2>簡介</h2>\n        <p class="intro">本書籤小工具主要是利用在 HTML a 標籤的 href 中寫入 javascript，點擊連結時觸發 javascript，javascript 做得到的功能都可以寫成書籤小工具。唯本小工具因為使用 HTML5 a 標籤的新屬性"download"，目前僅支援 Google Chrome 瀏覽器。</p>\n        <h2>操作說明</h2>\n        <p>拖拉下面的連結到瀏覽器書籤列即可新增書籤小工具，也可以直接點按嘗試本功能</p>':'<h2>Abstract</h2>\n        <p class="intro">You can add Javascript code in href attribute in HTML &lt;a&gt;. When click the a link, Javascript will be exeuted. Just add the link to bookmark, you can use the function in almost any page. This bookmarklet - <span class="bold">Bookmarklet-Download-Imgs</span> uses &lt;a&gt; download attribute and only supported in Google Chrome.</p>\n        <h2>How to use</h2>\n        <p>Drag the link below to your browser bookmark, or click directly to use.</p>',i=a?"無法取得下載圖片核心程式碼，可能是當前網站的安全性設定阻擋，或是伺服器暫時性錯誤":"Can't get source code from server. It might be blocked by CSP or temporary server error.",d=a?"打開載圖小視窗":"Open popup window for preview and dowload",s=a?"關閉":"Close",u=a?"下載選擇圖片":"Download selected image",c=a?"小提示：必須設定瀏覽器允許自動下載才能批次下載多張圖片":"Hint: downloading multiple images at one time requires advanced browser setting.",p=a?"選取/取消選取全部圖片":"Select/deselect all",g=a?"下載此圖":"Download this image",m=a?"Oops!!! 本網頁找不到可供下載的圖片":"Oops!!! No image for download.";t.appName=r,t.textDemopage=l,t.msgGetCodeAlert=i,t.textOpenDownloadPopup=d,t.textClose=s,t.textDownloadSelected=u,t.hintAllowBrowserDownloadMultiple=c,t.textSelectAll=p,t.textDownloadThis=g,t.textCantFindImgs=m},function(e,t,o){"use strict";var n=o(1),a=function(e,t,o,n){var a=e.createElement("script");a.setAttribute("charset","UTF-8"),a.setAttribute("type","application/javascript"),a.readyState?a.onreadystatechange=function(){"loaded"!=a.readyState&&"complete"!=a.readyState||(a.onreadystatechange=null,"function"==typeof o&&o())}:a.onload=function(){"function"==typeof o&&o()},a.onerror=function(){alert(n)},a.src=t,e.getElementsByTagName("head")[0].appendChild(a)};!function(e,t){var o=e.getElementById("link");o&&(o.href="javascript:var awesomebookmark = "+String(t)+';\n                                awesomebookmark(document, "'+String("https://rawgit.com/Joseph7451797/bookmarklet_download_imgs/dev/dist/main.js?cgcq4d")+'", null, "'+String(n.msgGetCodeAlert)+'");',o.innerHTML=n.textOpenDownloadPopup),e.title=n.appName,e.getElementById("demo").innerHTML=n.textDemopage}(document,a)},,,,,,,function(e,t,o){e.exports=o(2)}]);