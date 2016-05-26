(function(s) {
	var imgs = s.querySelectorAll('img');
	var length = imgs.length ? imgs.length : null;
	var hash = new Date().getTime();
	var temp = length ? '<div id=' + hash + '_close style="position: fixed;z-index: 1;top: 30px;display: inline-block;width: 45px;background-color: #333;color: #fff;line-height: 40px;font-size: 15px;text-align: center;border-radius: 3px;box-shadow: 1px 1px 4px 1px rgba(127, 127, 127, 0.8);cursor: pointer";>關閉</div>'
			+'<div id=' + hash + '_download_btn style="position: fixed;z-index: 1;top: 30px;right: 30px;display: inline-block;padding: 0 10px;background-color: #7f7fff;color: #fff;line-height: 40px;font-size: 15px;text-align: center;border-radius: 3px;box-shadow: 1px 1px 6px 1px rgba(127, 127, 127, 0.5);cursor: pointer">下載選擇圖片</div>'
			+'<p style="margin: 20px 0;padding: 0;line-height: 1.4em;font-size: 14px;">小提示：必須設定瀏覽器允許自動下載才能批次下載多張圖片</p>'
			+'<input type="checkbox" id="checkallcheck"><span style="margin-left: 5px;line-height: 1.4em;font-size: 14px;">選取全部圖片</span>' : '<div id=' + hash + '_close style="position: fixed;z-index: 1;top: 30px;display: inline-block;width: 45px;background-color: #333;color: #fff;line-height: 40px;font-size: 15px;text-align: center;border-radius: 3px;box-shadow: 1px 1px 4px 1px rgba(127, 127, 127, 0.8);cursor: pointer";>關閉</div>';
	var d;

	var getHighestZindex = function() {
		var allElems = s.querySelectorAll('*');
		var length = allElems.length;
		var highest = 0;
		var zindex;

		if( length ) {
			for(var i = 0; i < length; i++) {
				zindex = s.defaultView.getComputedStyle(allElems[i],null).getPropertyValue("z-index");
				if ( zindex > highest && zindex !== 'auto' ) {
					highest = zindex;
				}
			}
		}
		return +highest;
	};

	if( length ) {
		for(var i = 0; i < length; i++) {

			var src = imgs[i].src ? imgs[i].src : null;

			if( src ) {
				// 將 img src 值填入 temp
				temp += '<div style="position: relative;margin: 10px 0 40px;max-width: 100%;">'
					+		'<img src="' + src + '" style="display: block;margin-bottom: 10px;max-width: 100%;"/>'
					+		'<input type="checkbox" name="imgcheckboxes" style="position: absolute;top: 0;left: 0;">'
					+		'<a id="' + hash + '_download_link" href="' + src + '" download style="color: blue;font-size: 16px;">下載此圖</a>'
					+	'</div>';
			}else {
				
				// 去 img 其他 attributes 中找圖片網址並填入 temp

				var attrlength = imgs[i].attributes.length;
				
				for(var k = 0; k < attrlength; k++) {

					var value = imgs[i].attributes[k].value;

					if( value.search('http') === 0 ) {
						temp += '<div style="position: relative;margin: 10px 0 40px;max-width: 100%;">'
							+		'<img src="' + value + '" style="display: block;margin-bottom: 10px;max-width: 100%;"/>'
							+		'<input type="checkbox" name="imgcheckboxes" style="position: absolute;top: 0;left: 0;">'
							+		'<a id="' + hash + '_download_link" href="' + value + '" download style="color: blue;font-size: 16px;">下載此圖</a>'
							+	'</div>';
					}
				}
				
			}
		}

		temp += '<div style="font-size: 12px;">抓圖工具小視窗 by '
			+		'<a href="http://joseph7451797.github.io/bookmarklet_download_imgs/" target="_blank" style="color: blue;">Joseph</a>, inspired by '
			+		'<a href="http://www.wfublog.com/2015/05/google-drive-direct-link-widget-v2.html" target="_blank" style="color: blue;">WFU BLOG</a>'
			+		' & <a href="http://angryplay.blogspot.tw/" target="_blank" style="color: blue;">Angryplay</a>'
			+	'</div>';

	}else {
		temp += '<div style="position: absolute;top: 40%;padding: 0 20px 0 0;font-size: 12px;line-height: 2em;">Oops!!! 本網頁找不到可供下載的圖片<br/>抓圖工具小視窗 by '
			+		'<a href="http://joseph7451797.github.io/bookmarklet_download_imgs/" target="_blank" style="color: blue;">Joseph</a>, inspired by '
			+		'<a href="http://www.wfublog.com/2015/05/google-drive-direct-link-widget-v2.html" target="_blank" style="color: blue;">WFU BLOG</a>'
			+		' & <a href="http://angryplay.blogspot.tw/" target="_blank" style="color: blue;">Angryplay</a>'
			+	'</div>';
	}

	d = s.createElement('div');
	d.id = hash + '_for_download_window';

	var styleObj = {
      'position': 'fixed',
      'zIndex': getHighestZindex() + 1,
      'top': '20px',
      'right': '20px',
      'padding': '50px 20px 20px',
      'width': '33%',
      'height': '500px',
      'minWidth': '300px',
	  'textAlign': 'left',
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

	var closebtn = s.querySelector('div[id="' + hash + '_close"]');
	var downloadBtn = s.querySelector('div[id="' + hash + '_download_btn"]');
	var checkallbtn = s.getElementById('checkallcheck');
	var clicked = false;

	closebtn.onclick = function() {
		s.getElementById(hash + '_for_download_window').remove();
	}

	checkallbtn.onclick = function() {
		var checkedBoxes = s.querySelectorAll('input[name=imgcheckboxes]');
		var allboxlength = checkedBoxes.length;
		if( clicked ) {
			for(var m = 0; m < allboxlength; m++) {
				checkedBoxes[m].checked = false;
			}
			clicked = false;
		}else {
			for(var n = 0; n < allboxlength; n++) {
				checkedBoxes[n].checked = true;
			}
			clicked = true;
		}
	}

	downloadBtn.onclick = function() {
		var arr = [];
		var checkedBoxes = s.querySelectorAll('input[name=imgcheckboxes]:checked');
		for(var j = 0; j < checkedBoxes.length; j++) {
			arr.push(checkedBoxes[j].nextSibling);
		}
		for(var l = 0; l < arr.length; l++) {
			var e = new MouseEvent("click", {
			    "view": window,
			    "bubbles": true,
			    "cancelable": false
			});
			arr[l].dispatchEvent(e);
		}
	}
	
})(document);