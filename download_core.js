(function(s) {
	var imgs = s.querySelectorAll('img');
	var length = imgs.length ? imgs.length : null;
	var hash = new Date().getTime();
	var temp = '<div id=' + hash + '_close style="position: fixed;z-index: 1;top: 30px;display: inline-block;width: 45px;background-color: #333;color: #fff;line-height: 40px;font-size: 15px;text-align: center;border-radius: 3px;box-shadow: 1px 1px 4px 1px rgba(127, 127, 127, 0.8);cursor: pointer";>關閉</div>'
			+'<div id=' + hash + '_download_btn style="position: fixed;z-index: 1;top: 30px;right: 30px;display: inline-block;padding: 0 10px;background-color: #7f7fff;color: #fff;line-height: 40px;font-size: 15px;text-align: center;border-radius: 3px;box-shadow: 1px 1px 6px 1px rgba(127, 127, 127, 0.5);cursor: pointer">下載選擇圖片</div>';
	var d;

	if( length ) {
		for(var i = 0; i < length; i++) {

			var src = imgs[i].src ? imgs[i].src : null;

			if( src && src.search('http') > -1) {
				var k = src.lastIndexOf('.');
				if( k > -1 ) {
					temp += '<div style="position: relative;margin: 10px 0 40px;max-width: 100%;"><img src="' + src + '" style="display: block;margin-bottom: 10px;max-width: 100%;"/><input type="checkbox" name="imgcheckboxes" style="position: absolute;top: 0;left: 0;"><a id="' + hash + '_download_link" href="' + src + '" download="img-' + i + src.substr(k) + '" style="color: blue;font-size: 16px;">下載此圖</a></div>';
				}
			}
		}

		temp += '<div>抓圖工具小視窗 by Joseph, inspired by <a href="http://www.wfublog.com/2015/05/google-drive-direct-link-widget-v2.html" target="_blank">WFU BLOG</a> & <a href="http://angryplay.blogspot.tw/" target="_blank">Angryplay</a></div>';

	}else {
		temp += '<div style="position: absolute;top: 40%;padding: 0 20px 0 0;line-height: 2em;">Oops!!! 本網頁找不到可供下載的圖片<br/>抓圖工具小視窗 by Joseph, inspired by <a href="http://www.wfublog.com/2015/05/google-drive-direct-link-widget-v2.html" target="_blank">WFU BLOG</a> & <a href="http://angryplay.blogspot.tw/" target="_blank">Angryplay</a></div>';
	}

	d = s.createElement('div');
	d.id = hash + '_for_download_window';

	var styleObj = {
      'position': 'fixed',
      'zIndex': '10000',
      'top': '20px',
      'right': '20px',
      'padding': '50px 20px 20px',
      'width': '33%',
      'height': '500px',
      'minWidth': '300px',
      'overflow': 'auto',
      'backgroundColor': '#fff',
      'boxShadow': '1px 2px 6px 4px rgba(223, 223, 223, 0.4)',
      'borderRadius': '10px'
    };

    for(var key in styleObj) {
      d.style[key] = styleObj[key];
	}
	
	d.innerHTML = temp;
	
	s.body.insertBefore(d, s.body.firstChild);

	var atags = s.querySelectorAll('a[id="' + hash + '_download_link"]').length ? s.querySelectorAll('a[id="' + hash + '_download_link"]') : null;
	var closebtn = s.querySelector('div[id="' + hash + '_close"]');
	var downloadBtn = s.querySelector('div[id="' + hash + '_download_btn"]');

	closebtn.onclick = function() {
		s.getElementById(hash + '_for_download_window').remove();
	}

	if( atags ) {

		var alength = atags.length;

		for(var i = 0; i < alength; i++){
			//建立觸發事件
			var e = s.createEvent('MouseEvents');
			e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		}
	}

	downloadBtn.onclick = function() {
		var arr = [];
		var checkedBoxes = s.querySelectorAll('input[name=imgcheckboxes]:checked');
		for(var j = 0; j < checkedBoxes.length; j++) {
			arr.push(checkedBoxes[j].nextSibling);
		}
		for(var l = 0; l < arr.length; l++) {
			arr[l].click();
		}
	}
	
})(document);