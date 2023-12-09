"use strict";

//
var data = 'input';
var txt = data;
var reg = /[aiueo]/gi;
var result = txt.replace(reg, '');
console.log(result); //

var length = lines[0].length;
var array = Array.from({
  length: length + 2
}, function () {
  return '+';
});
console.log(array.join(''));
console.log('+' + lines[0] + '+');
console.log(array.join(''));