var fun = require('./functions.js');
var _ = require("lodash");

var arr = ['apple', 'banana', 'strawberry', 'banana', 'orange']
var arr = _.concat(arr, 2, [3], [[4]]);

console.log(arr);

exports.printArr = () => {
	console.log(arr);
}

exports.printMsg = () => {
	console.log("Demo message");
}