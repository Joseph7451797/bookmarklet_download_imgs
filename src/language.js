/**
 * Support traditional-Chinese and English
 */

import { getBrowserLanguage } from './utilities'

const isZhHant = getBrowserLanguage() === 'zh-TW'

const appName = isZhHant
    ? '抓圖工具小視窗'
    : 'Bookmarklet-Download-Imgs'

const textDemopage = isZhHant
    ? `<h2>簡介</h2>
        <p class="intro">本書籤小工具主要是利用在 HTML a 標籤的 href 中寫入 javascript，點擊連結時觸發 javascript，javascript 做得到的功能都可以寫成書籤小工具。唯本小工具因為使用 HTML5 a 標籤的新屬性"download"，目前僅支援 Google Chrome 瀏覽器。</p>
        <h2>操作說明</h2>
        <p>拖拉下面的連結到瀏覽器書籤列即可新增書籤小工具，也可以直接點按嘗試本功能</p>`
    : `<h2>Abstract</h2>
        <p class="intro">You can add Javascript code in href attribute in HTML &lt;a&gt;. When click the a link, Javascript will be exeuted. Just add the link to bookmark, you can use the function in almost any page. This bookmarklet - <span class="bold">Bookmarklet-Download-Imgs</span> uses &lt;a&gt; download attribute and only supported in Google Chrome.</p>
        <h2>How to use</h2>
        <p>Drag the link below to your browser bookmark, or click directly to use.</p>`

const msgGetCodeAlert = isZhHant
    ? '無法取得下載圖片核心程式碼，可能是當前網站的安全性設定阻擋，或是伺服器暫時性錯誤'
    : 'Can\'t get source code from server. It might be blocked by CSP or temporary server error.'

const textOpenDownloadPopup = isZhHant
    ? '打開載圖小視窗'
    : 'Open popup window for preview and dowload'

const textClose = isZhHant
    ? '關閉'
    : 'Close'

const textDownloadSelected = isZhHant
    ? '下載選擇圖片'
    : 'Download selected image'

const hintAllowBrowserDownloadMultiple = isZhHant
    ? '小提示：必須設定瀏覽器允許自動下載才能批次下載多張圖片'
    : 'Hint: downloading multiple images at one time requires advanced browser setting.'

const textSelectAll = isZhHant
    ? '選取/取消選取全部圖片'
    : 'Select/deselect all'

const textDownloadThis = isZhHant
    ? '下載此圖'
    : 'Download this image'

const textCantFindImgs = isZhHant
    ? 'Oops!!! 本網頁找不到可供下載的圖片'
    : 'Oops!!! No image for download.'

export {
    appName,
    textDemopage,
    msgGetCodeAlert,
    textOpenDownloadPopup,
    textClose,
    textDownloadSelected,
    hintAllowBrowserDownloadMultiple,
    textSelectAll,
    textDownloadThis,
    textCantFindImgs
}