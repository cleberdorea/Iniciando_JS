//console.log('Hello World!');
//document.getElementsByTagName('h1');
//var heading1 = document.getElementsByTagName('h1')[0];
//heading1.style.color('red'); AULA DOM(DOCUMENT OBJECT MANIPULATION)
var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;

function increment() {
	currentNumber = currentNumber +1;
	currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
	currentNumber = currentNumber -1;
	currentNumberWrapper.innerHTML = currentNumber;
}
