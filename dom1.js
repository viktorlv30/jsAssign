//location.assign('https://www.google.com.ua/');
var url = location.toString()
console.log(url);

console.log(document, document.getElementById('get-id'));

console.log(document.getElementsByName('get-name'));
console.log(document.getElementsByName('get-name')[0]);

console.log(document.getElementsByTagName('ul'));

console.log(document.getElementsByClassName('get-class'));

console.log(document.getElementById('get-attribute').getAttribute('class'));

var clickLi = function () {
    console.log(this);
}