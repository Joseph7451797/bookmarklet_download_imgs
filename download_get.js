// 取得核心程式碼，並支援 callback
// 第1個參數是 document，第2個參數是核心程式碼存放的網路連結，
// 第3個參數允許傳入一個callback function
var getScript = function(d,s,f) {

	var e = d.createElement('script');

	if( e.readyState ) {
	    e.onreadystatechange = function() {
	        if (e.readyState == 'loaded' || e.readyState == 'complete') {
	            e.onreadystatechange = null;
	            if( typeof f === 'function' ) {
	                f();
	            }
	        }
	    }
	}else {
	    e.onload = function() {
	        if( typeof f === 'function' ) {
	            f();
	        }
	    }
	}
	e.src = s;
	d.documentElement.firstChild.appendChild(e);
};

// 動態將 a 標籤的網址填入
(function(d,s) {

	var atag = d.getElementById('link');

	if( atag ) {
		atag.href = "javascript:var awesomebookmark = " + String(s) + "; awesomebookmark(document,'https://dl.dropboxusercontent.com/u/43833728/core.js');";
		atag.innerHTML = '打開載圖小視窗';
	}
})(document,getScript);
