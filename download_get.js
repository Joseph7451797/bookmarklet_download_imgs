(function(d,s,f) {

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

})(document,'https://dl.dropboxusercontent.com/u/43833728/core.js');