var fun = require('./functions.js')

var arr = ['apple', 'banana', 'strawberry', 'banana', 'orange']
var arr = _.concat(arr, 2, [3], [[4]]);

console.log(arr);

exports.printArr = function() {
	console.log(arr);
}

exports.printMsg = function () {
	console.log("Demo message");
}