(function(s) {
	var imgs = s.querySelectorAll('img');
	var length = imgs.length ? imgs.length : null;
	var hash = new Date().getTime();
	var temp = '<div id=' + hash + '_close style=display: inline-block;margin-bottom: 15px;width: 40px;height: 40px;background-color: #333;color: #fff;line-height: 40px;font-size: 15px;text-align: center;border-radius: 3px;cursor: pointer;>關閉</div>';
	var d;

	if( length ) {
		for(var i = 0; i < length; i++) {

			var src = imgs[i].src ? imgs[i].src : null;

			if( src && src.search('http') > -1) {
				var k = src.lastIndexOf('.');
				if( k > -1 ) {
					temp += '<img src="' + src + '" style="display: block;max-width: 100%;"/><a id="' + hash + '_download_link" href="' + src + '" download="img-' + i + src.substr(k) + '" style="display: block;margin: 10px 0 25px; color: blue;">' + src + '</a>';
				}
			}
		}

		temp += '抓圖工具頁面 by Joseph, inspired by Angryplay.blogspot.tw';

	}else {
		temp += '本網頁沒有圖片可供下載<br/>抓圖工具頁面 by Joseph, inspired by Angryplay.blogspot.tw';
	}

	d = s.createElement('div');
	d.id = hash + '_for_download_window';

	var styleObj = {
      'position': 'fixed',
      'zIndex': '10000',
      'top': '20px',
      'right': '20px',
      'padding': '20px',
      'width': '33%',
      'height': '500px',
      'minWidth': '300px',
      'overflow': 'auto',
      'backgroundColor': '#fff',
      'boxShadow': '2px 2px 8px 4px #dfdfdf',
      'borderRadius': '10px'
    };

    for(var key in styleObj) {
      d.style[key] = styleObj[key];
	}
	
	d.innerHTML = temp;
	
	s.body.insertBefore(d, s.body.firstChild);

	var atags = s.querySelectorAll('a[id="' + hash + '_download_link"]').length ? s.querySelectorAll('a[id="' + hash + '_download_link"]') : null;
	var closebtn = s.querySelector('div[id="' + hash + '_close"]');

	closebtn.onclick = function() {
		s.getElementById(hash + '_for_download_window').remove();
	}

	if( atags ) {

		var alength = atags.length;

		for(var i = 0; i < alength; i++){
			//建立觸發事件
			var e = s.createEvent('MouseEvents');
			e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			//觸發下載(chrome會跳出視窗請允許大量下載)
			//a[i].dispatchEvent(e);
		}
	}
	
})(document);