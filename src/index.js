// index.js
require('./style.css');

var hello = require('./hello.js');

var button = document.querySelector('.js-add-hello');
var hellos = document.querySelector('#hellos');

button.addEventListener('click', function(e) {
  e.preventDefault();

  hellos.insertAdjacentHTML('beforeend', hello());
});