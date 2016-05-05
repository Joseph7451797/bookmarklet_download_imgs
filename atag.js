var script = require('./download_get.js');

(function(d,s) {
	var atag = d.getElementById('link');

	console.log(s);

	if( atag ) {
		atag.href = "javascript:" + s.init + ";";
		atag.innerHTML = '123';
	}
})(document,script);


// var aaa = function() {
//   this.init = function() {
//     console.log('yeah~');
//   };
// };

// var bbb = new aaa();

// (function test24(word){
//     //var jsonStr = word;
//     var jsonObj = (new Function('return ' + word))();
//     //console.log(jsonObj);
// })(bbb.init());