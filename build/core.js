!function(e){function o(t){if(i[t])return i[t].exports;var n=i[t]={exports:{},id:t,loaded:!1};return e[t].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}var i={};return o.m=e,o.c=i,o.p="/build/",o(0)}([function(e,o,i){e.exports=i(1)},function(e,o){!function(e){var o,i=e.querySelectorAll("img"),t=i.length?i.length:null,n=(new Date).getTime(),r="<div id="+n+'_close style="position: fixed;z-index: 1;top: 30px;display: inline-block;width: 45px;background-color: #333;color: #fff;line-height: 40px;font-size: 15px;text-align: center;border-radius: 3px;box-shadow: 1px 1px 4px 1px rgba(127, 127, 127, 0.8);cursor: pointer";>關閉</div><div id='+n+'_download_btn style="position: fixed;z-index: 1;top: 30px;right: 30px;display: inline-block;padding: 0 10px;background-color: #7f7fff;color: #fff;line-height: 40px;font-size: 15px;text-align: center;border-radius: 3px;box-shadow: 1px 1px 6px 1px rgba(127, 127, 127, 0.5);cursor: pointer">下載選擇圖片</div>';if(t){for(var l=0;t>l;l++){var d=i[l].src?i[l].src:null;if(d&&d.search("http")>-1){var a=d.lastIndexOf(".");a>-1&&(r+='<div style="position: relative;margin: 10px 0 40px;max-width: 100%;"><img src="'+d+'" style="display: block;margin-bottom: 10px;max-width: 100%;"/><input type="checkbox" name="imgcheckboxes" style="position: absolute;top: 0;left: 0;"><a id="'+n+'_download_link" href="'+d+'" download="img-'+l+d.substr(a)+'" style="color: blue;font-size: 16px;">下載此圖</a></div>')}}r+='<div>抓圖工具小視窗 by Joseph, inspired by <a href="http://www.wfublog.com/2015/05/google-drive-direct-link-widget-v2.html" target="_blank">WFU BLOG</a> & <a href="http://angryplay.blogspot.tw/" target="_blank">Angryplay</a></div>'}else r+='<div style="position: absolute;top: 40%;padding: 0 20px 0 0;line-height: 2em;">Oops!!! 本網頁找不到可供下載的圖片<br/>抓圖工具小視窗 by Joseph, inspired by <a href="http://www.wfublog.com/2015/05/google-drive-direct-link-widget-v2.html" target="_blank">WFU BLOG</a> & <a href="http://angryplay.blogspot.tw/" target="_blank">Angryplay</a></div>';o=e.createElement("div"),o.id=n+"_for_download_window";var p={position:"fixed",zIndex:"10000",top:"20px",right:"20px",padding:"50px 20px 20px",width:"33%",height:"500px",minWidth:"300px",overflow:"auto",backgroundColor:"#fff",boxShadow:"1px 2px 6px 4px rgba(223, 223, 223, 0.4)",borderRadius:"10px"};for(var s in p)o.style[s]=p[s];o.innerHTML=r,e.body.insertBefore(o,e.body.firstChild);var x=e.querySelectorAll('a[id="'+n+'_download_link"]').length?e.querySelectorAll('a[id="'+n+'_download_link"]'):null,c=e.querySelector('div[id="'+n+'_close"]'),g=e.querySelector('div[id="'+n+'_download_btn"]');if(c.onclick=function(){e.getElementById(n+"_for_download_window").remove()},x)for(var f=x.length,l=0;f>l;l++){var h=e.createEvent("MouseEvents");h.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null)}g.onclick=function(){for(var o=[],i=e.querySelectorAll("input[name=imgcheckboxes]:checked"),t=0;t<i.length;t++)o.push(i[t].nextSibling);for(var n=0;n<o.length;n++)o[n].click()}}(document)}]);