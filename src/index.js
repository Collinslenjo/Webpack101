// Index.js is the entry point
// calling the css
require('./style.css');
// calling the hello component
var hello = require('./components/hello/hello.js');
var button = document.querySelector('.js-add-hello');
var hellos = document.querySelector('#hellos');

button.addEventListener('click', function(e) {
  e.preventDefault();
  hellos.insertAdjacentHTML('beforeend', hello());
});
